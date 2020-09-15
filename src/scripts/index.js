import {
    addItemToReferenceList,
    create,
    createHistoryItem,
    createNewItem,
    createRecipe,
    read,
    remove,
    removeRecipe
} from "./firebaseCRUD";
import {email, password} from "./credentials";
import {fireBase,fireStore} from "./firebase";

export {default as categorizeItem} from "./categorizeItems";
export {default as caseString} from "./formatText";
export {default as getId} from "./idGenerator";
export {default as readFromTodoist} from "./todoistCRUD";

export {fireStore,fireBase}
export {email, password}
export {
    addItemToReferenceList,
    create,
    createHistoryItem,
    createNewItem,
    createRecipe,
    remove,
    removeRecipe,
    read
}
