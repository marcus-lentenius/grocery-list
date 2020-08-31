import {fireStore} from "./firebase";
import * as firebase from "firebase";

//todo migrate reflist2 -> reflist1
async function getReferenceList() {
    return new Promise(function (resolve) {
        fireStore.collection('reference_list2').onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                resolve(doc.data())
            });
        });
    })
}

export async function Read(storeDocument) {
    return new Promise(function (resolve) {
        fireStore.collection('grocery_list').doc(storeDocument).onSnapshot(snapshot => {
            resolve(snapshot.data());
        });
    })
}

export async function getItems() {
    return new Promise(function (resolve) {
        fireStore.collection('grocery_list').onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                resolve(doc.data().items)
            });
        });
    })
}

async function getSortingOrder() {
    return new Promise(function (resolve) {
        fireStore.collection('sort_order').onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                resolve(doc.data())
            });
        });
    })
}

export async function ReadFromFireStore(path) {
    return new Promise(function (resolve) {
        fireStore.collection(path).onSnapshot(snapshot => {
            snapshot.docs.forEach(doc => {
                resolve(doc.data())
            });
        });
    })
}

export const Delete = async (item, path) => {
    return fireStore.collection('grocery_list').doc(path).update({
        items: firebase.firestore.FieldValue.arrayRemove(item)
    }).catch((e) => console.error('delete error: ', e));
}


//todo ta bort array? param items
export const Create = async (items, {
    name,
    category = '',
    amount = 1,
    id = Math.round(Math.random() * (99999999 - 11111111) + 11111111)
}) => {

    //todo gör en .set med en ny lista så duplicates får finnas
    const item = {
        name: name,
        category: category,
        amount: amount,
        //todo flytta hit math.rand
        id: id
    }

    console.log('Creating item ' + JSON.stringify(item));

    if (items) {
        items.map(existingItem => {
            if (existingItem.name.toLowerCase() === name.toLowerCase()) {
                item.amount += existingItem.amount
                Delete(existingItem, 'items')
            }
        });
    }

    return fireStore.collection('grocery_list').doc('items').update({
        items: firebase.firestore.FieldValue.arrayUnion(item)
    }).catch((e) => console.error('write error: ', e));
};
export const CreateRecipe = async (recipe) => {
    //todo gör en .set med en ny lista så duplicates får finnas

    return fireStore.collection('grocery_list').doc('recipes').update({
        recipes: firebase.firestore.FieldValue.arrayUnion(recipe)
    }).catch((e) => console.error('write error: ', e));
    // }, { merge: true }).catch((e) => console.error('write error: ', e));
    // return fireStore.collection('grocery_list').doc('recipes').set({
    //     recipes: recipe
    //         // {
    //         // name:
    //         // ingredients: recipe.ingredients,
    //         // id: recipe.id
    //     // }
    // }, { merge: true }).catch((e) => console.error('write error: ', e));
};

export const CreateNewItem = async (name) => {
    //todo gör en .set med en ny lista så duplicates får finnas

    return fireStore.collection('grocery_list').doc('new_items').update({
        items: firebase.firestore.FieldValue.arrayUnion(name)
    }).catch((e) => console.error('write error: ', e));
};

export const SetCategoryOnItem = async (name, category) => {
    //todo gör en .set med en ny lista så duplicates får finnas

    return fireStore.collection('grocery_list').doc('reference_list').update({
        [category]: firebase.firestore.FieldValue.arrayUnion(name)
    }).catch((e) => console.error('write error: ', e));
};