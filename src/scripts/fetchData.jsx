import React from 'react';
import {Create, Read} from "../scripts/firebaseCRUD";
import {TodoistRead} from "../scripts/todoistCRUD";
import {CategorizeItem} from "../scripts/categorizeItems";
import {caseString} from "../scripts/formatText";

//todo error message
// is this single purpose?
// seperate index export files


let items = [];
let reference_list = [];
let sorting_order = [];
let new_items = [];
let recipes = [];

export const getUpdatedData = (data) => {
    switch (data) {
        case 'items':
            return items;
        case 'reference_list':
            return reference_list;
        case 'sorting_order':
            return sorting_order;
        case 'new_items':
            return new_items;
            break;
        case 'recipes':
            return recipes;
    }
}

// todo refactor
export const dataLoader = async () => {


    const updateData = async () => {
        await fetchItems();
        await fetchNewItems()
        await fetchReferenceList();
    }


    // let items = await fetchItems();
    // let reference_list = await fetchReferenceList();
    // let sorting_order = await fetchSortOrder();
    // let new_items = await fetchNewItems();
    // let recipes = await fetchRecipes();


    const fetchItems = async () => {
        console.log('Fetching items...')
        const response = await Read('items');
        //todo ta bort items[]från firestore?
        items = response.items;
        console.log('Items fetched')
    }

    const fetchRecipes = async () => {
        console.log('Fetching recipes...')
        const response = await Read('recipes');
        //todo ta bort items[]från firestore?
        recipes = response.recipes;
        console.log('Recipes fetched')
    }

    const fetchReferenceList = async () => {
        console.log('Fetching Reference list...')
        const response = await Read('reference_list');
        reference_list = response;
        console.log('Reference list fetched')
    }

    const fetchSortOrder = async () => {
        console.log('Fetching Sorting order...')
        const response = await Read('sorting_order');
        sorting_order = response.coop;
        console.log('Sorting order fetched')
    }

    const fetchNewItems = async () => {
        console.log('Fetching New items...')
        const response = await Read('new_items');
        new_items = response.items;
        console.log('New items fetched')
    }

    //todo refactor
    const importFromTodoist = async () => {
        const todoistList = await TodoistRead();
        const arr = todoistList.map(item => {
            return {name: item.content, category: CategorizeItem(item.content, reference_list)}
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
        await updateData()
    }


    await (async () => {
        console.log('Preload initiated...')
        await fetchItems();
        await fetchReferenceList();
        await fetchSortOrder();
        await fetchNewItems()
        await fetchRecipes()
        console.log('Preload complete')
    })()

    return {
        items: items,
        reference_list: reference_list,
        sorting_order: sorting_order,
        new_items: new_items,
        recipes: recipes,
        fetchItems: fetchItems.bind(this),
        fetchReferenceList: fetchReferenceList.bind(this),
        importFromTodoist: importFromTodoist.bind(this),
        fetchRecipes: fetchRecipes.bind(this),
        fetchSortingOrder: fetchSortOrder.bind(this),
        updateData: updateData.bind(this),
    }

}
