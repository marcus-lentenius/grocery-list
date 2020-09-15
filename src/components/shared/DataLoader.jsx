import React, {useEffect, useState} from "react";

import {caseString, categorizeItem, create, email, fireBase, password, read, readFromTodoist} from "../../scripts";
import LoadingScreen from "./LoadingScreen";

export const ContextData = React.createContext(null);

//todo split up?

export const Loader = props => {
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false);

    const [items, setItems] = useState(null);
    const [referenceList, setReferenceList] = useState(null)
    const [sortingOrder, setSortingOrder] = useState(null)
    const [newItems, setNewItems] = useState(null)
    const [recipes, setRecipes] = useState(null)
    const [history, setHistory] = useState(null)

    useEffect(() => {
        if (!isAuthenticated) {
            fireBase.auth().signInWithEmailAndPassword(email, password)
                .then(success => {
                    setAuthenticated(true);
                    console.log('authenticated')
                })
                .catch((e) => console.error(e));
        }
    }, [isAuthenticated])

    useEffect(() => {
        if (!isLoaded && isAuthenticated) {
            fetchData()
        }
    }, [isLoaded, isAuthenticated])

    const fetchData = async () => {
        console.log('Preload initiated...')
        await fetchSortOrder();
        await fetchReferenceList();
        await fetchItems();
        await fetchNewItems();
        await fetchRecipes();
        await fetchHistory();
        setIsLoaded(true);
        console.log('Preload complete')
    }
//todo remove or pass only this one to context?
    const updateData = async (group) => {
        //todo enums?
        switch (group) {
            case 'newItems':
                fetchNewItems();
                break;
            case 'items':
                fetchItems();
                break;
            case 'referenceList':
                fetchReferenceList();
                break;
            case 'recipes':
                fetchRecipes();
                break;
            case 'history':
                fetchHistory();
                break;
            default:
                break;
        }
    }

    const fetchItems = async () => {
        console.log('Fetching items...')
        const response = await read('items');
        setItems(response.items);
        console.log('Items fetched')
    }
    const fetchRecipes = async () => {
        console.log('Fetching recipes...')
        const response = await read('recipes');
        setRecipes(response.recipes)
        console.log('Recipes fetched')
    }

    const fetchReferenceList = async () => {
        console.log('Fetching Reference list...')
        const response = await read('reference_list');
        setReferenceList(response)
        console.log('Reference list fetched')
    }

    const fetchSortOrder = async () => {
        console.log('Fetching Sorting order...')
        const response = await read('sorting_order');
        setSortingOrder(response.coop)
        console.log('Sorting order fetched')
    }
    const fetchNewItems = async () => {
        console.log('Fetching New items...')
        const response = await read('new_items');
        setNewItems(response.items);
        console.log('New items fetched')
    }
    const fetchHistory = async () => {
        console.log('Fetching History...')
        const response = await read('history');
        setHistory(response.items);
        console.log('History fetched')
    }

    const importFromTodoist = async () => {
        const todoistList = await readFromTodoist();

        const listOfItems = todoistList.map(item => {
            return {name: item.content, category: categorizeItem(item.content, referenceList)}
        })

        listOfItems.forEach(newItem => {
            let exists = false
            items.forEach(item => {
                if (item.name === newItem.name) {
                    exists = true
                }
            })

            if (exists === false) {
                create(items, {
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
        reference_list: referenceList,
        sorting_order: sortingOrder,
        new_items: newItems,
        recipes: recipes,
        history: history,
        importFromTodoist: importFromTodoist.bind(this),
        updateData: updateData.bind(this),
    }

    return (
        <>
            {isLoaded ? <ContextData.Provider value={state}>
                {props.children}
            </ContextData.Provider> : <LoadingScreen/>}
        </>
    );
};