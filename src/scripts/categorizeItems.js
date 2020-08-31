//todo name convention?
import {caseString} from "./formatText";
import {CreateNewItem} from "./firebaseCRUD";

/**
 * Cross references the item name with a list of categories and updates category prop of item

 * @param name
 * @param referenceList
 * @returns {string}
 * @constructor
 */

export const CategorizeItem = (name, referenceList) => {
    let cat = '';
    let exists = false

    Object.values(referenceList).forEach(listOfItems => {
        listOfItems.map((value, index) => {
            listOfItems[index] = value.toLowerCase();
        });
    });

    Object.entries(referenceList).forEach(category => {
        if (category[1].includes(name.toLowerCase())) {
            cat = caseString(category[0]);
            exists = true
        }
    })

//todo check up on this
    if (!exists) {
        CreateNewItem(name)
    }

    return cat;
}