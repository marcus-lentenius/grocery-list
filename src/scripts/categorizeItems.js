import {caseString, createNewItem} from "./";

/**
 * Cross references the item name with a list of categories and updates category prop of item

 * @param name
 * @param referenceList
 * @returns category which is related to the item name provided
 */

const categorizeItem = (name, referenceList) => {
    let category = '';
    let exists = false

    Object.values(referenceList).forEach(listOfItems => {
        listOfItems.map((value, index) => {
            listOfItems[index] = value.toLowerCase();
        });
    });

    Object.entries(referenceList).forEach(cat => {
        if (cat[1].includes(name.toLowerCase())) {
            category = caseString(cat[0]);
            exists = true
        }
    })

    if (!exists) {
        createNewItem(caseString(name))
    }

    return category;
}

export default categorizeItem