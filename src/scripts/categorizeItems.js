//todo name convention?
import {caseString} from "./FormatText";
import {CreateNewItem} from "./firebaseCRUD";

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

    if (!exists) {
        CreateNewItem(name)
    }

    return cat;
}