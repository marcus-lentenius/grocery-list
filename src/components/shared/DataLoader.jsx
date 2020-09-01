import React, {useEffect, useState} from "react";
import {Create, Read} from "../../scripts/firebaseCRUD";
import {fireBase} from "../../scripts/firebase";
import {TodoistRead} from "../../scripts/todoistCRUD";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {caseString} from "../../scripts/formatText";
import {scryRenderedComponentsWithType} from "react-dom/test-utils";

export const LoadItems = React.createContext(null);

export const Loader = props => {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false);

    const [items, setItems] = useState(null);
    const [referenceList, setReferenceList] = useState(null)
    const [sortingOrder, setSortingOrder] = useState(null)
    const [newItems, setNewItems] = useState(null)
    const [recipes, setRecipes] = useState(null)

    useEffect(()=>{
        if (!isAuthenticated) {
            fireBase.auth().signInWithEmailAndPassword('marcus@lentenius.se', 'password')
                .then(success => {
                    setAuthenticated(true);
                    console.log('authenticated')
                })
                .catch((e) => console.error(e));
        }
    },[isAuthenticated])

    useEffect(() => {
        console.log('fetch?')
        if (!isLoaded && isAuthenticated) {
            fetchData()
        }
    }, [isLoaded, isAuthenticated])

    //todo reorder after need
    const fetchData = async () => {
        console.log('Preload initiated...')
        await fetchSortOrder();
        await fetchReferenceList();
        await fetchItems();
        await fetchNewItems()
        await fetchRecipes()
        setIsLoaded(true);
        console.log('Preload complete')
    }

    const updateData = async (group) => {
        //todo enums?
        switch (group) {
            case 'newItems':
                fetchNewItems();
                break;
        }
        // fetchSortOrder();
        // fetchReferenceList();
        fetchData();
        // fetchNewItems()
        // fetchRecipes()
    }

    const fetchItems = async () => {
        console.log('Fetching items...')
        const response = await Read('items');
        setItems(response.items);
        console.log('Items fetched')
    }
    const fetchRecipes = async () => {
        console.log('Fetching recipes...')
        const response = await Read('recipes');
        setRecipes(response.recipes)
        console.log('Recipes fetched')
    }

    const fetchReferenceList = async () => {
        console.log('Fetching Reference list...')
        const response = await Read('reference_list');
        setReferenceList(response)
        console.log('Reference list fetched')
    }

    const fetchSortOrder = async () => {
        console.log('Fetching Sorting order...')
        const response = await Read('sorting_order');
        setSortingOrder(response.coop)
        console.log('Sorting order fetched')
    }
    const fetchNewItems = async () => {
        console.log('Fetching New items...')
        const response = await Read('new_items');
        setNewItems(response.items);
        console.log('New items fetched')
    }

    // //todo refactor
    const importFromTodoist = async () => {
        const todoistList = await TodoistRead();
        const arr = todoistList.map(item => {
            return {name: item.content, category: CategorizeItem(item.content, referenceList)}
        })

        arr.forEach(newItem => {
            let exists = false
            items.forEach(item => {
                if (item.name === newItem.name) {
                    exists = true
                }
            })

            if (exists === false) {
                Create(items, {
                    name: caseString(newItem.name),
                    category: newItem.category,
                }).catch((e) => console.error(e));
            }
            exists = false
        })
        await updateData('items')
        await updateData('newItems')
    }

    const state = {
        items: items,
        //todo rename
        reference_list: referenceList,
        sorting_order: sortingOrder,
        new_items: newItems,
        recipes: recipes,
        fetchItems: fetchItems.bind(this),
        fetchReferenceList: fetchReferenceList.bind(this),
        importFromTodoist: importFromTodoist.bind(this),
        fetchRecipes: fetchRecipes.bind(this),
        updateData: updateData.bind(this)
    }

    return (
        <>
            {isLoaded ? <LoadItems.Provider value={state}>
                {props.children}
            </LoadItems.Provider> : <p> loading </p>}
        </>
    );
};
