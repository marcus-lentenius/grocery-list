import * as firebase from "firebase";

import {fireStore, getId} from "./";

//todo merge as much as possible

export const remove = async (item, path) => {
    return fireStore.collection('grocery_list').doc(path).update({
        items: firebase.firestore.FieldValue.arrayRemove(item)
    }).catch((e) => console.error('delete error: ', e));
}

export const removeRecipe = async (recipe) => {
    return fireStore.collection('grocery_list').doc('recipes').update({
        recipes: firebase.firestore.FieldValue.arrayRemove(recipe)
    }).catch((e) => console.error('delete error: ', e));
}

//todo ta bort array? param items
export const createHistoryItem = async (item) => {

    console.log('Creating History item ' + JSON.stringify(item));

    fireStore.collection('grocery_list').doc('history').update({
        items: firebase.firestore.FieldValue.arrayUnion(item)
    }).catch((e) => console.error('write error: ', e));
};

export const create = async (items,
                             {
                                 name,
                                 category = '',
                                 amount = 1
                             }) => {

    const item = {
        name: name,
        category: category,
        amount: amount,
        id: getId(),
        date: Date.now()
    }

    console.log('Creating item ' + JSON.stringify(item));

    // fireStore.collection('grocery_list').doc('history').update({
    //     items: firebase.firestore.FieldValue.arrayUnion(item)
    // }).catch((e) => console.error('write error: ', e));

    if (items) {
        items.map(existingItem => {
            if (existingItem.name.toLowerCase() === name.toLowerCase()) {
                item.amount += existingItem.amount
                remove(existingItem, 'items')
            }
        });
    }

    return fireStore.collection('grocery_list').doc('items').update({
        items: firebase.firestore.FieldValue.arrayUnion(item)
    }).catch((e) => console.error('write error: ', e));
};

export const createRecipe = async (recipe) => {
    return fireStore.collection('grocery_list').doc('recipes').update({
        recipes: firebase.firestore.FieldValue.arrayUnion(recipe)
    }).catch((e) => console.error('write error: ', e));
};

export const createNewItem = async (name) => {
    return fireStore.collection('grocery_list').doc('new_items').update({
        items: firebase.firestore.FieldValue.arrayUnion(name)
    }).catch((e) => console.error('write error: ', e));
};

export const addItemToReferenceList = async (name, category) => {
    return fireStore.collection('grocery_list').doc('reference_list').update({
        [category]: firebase.firestore.FieldValue.arrayUnion(name)
    }).catch((e) => console.error('write error: ', e));
};

export async function read(storeDocument) {
    return new Promise(function (resolve) {
        fireStore.collection('grocery_list').doc(storeDocument).onSnapshot(snapshot => {
            resolve(snapshot.data());
        });
    })
}