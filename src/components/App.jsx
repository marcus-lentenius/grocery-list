import React from 'react';
import View from "./View";
import {Loader} from "./shared/DataLoader";

//tests
// add item
    // add
    // amount
    // adds newItem
    // correct category
//new items
    // delete
    // categorize
//add recipe
    //name
    //ingredient & amount
    //edit name & amount & apply
    // add recipe
//recipes
    //open & close(outside & button)
    // delete
    // add ingredient
//import from todoist
    //adds items
    //adds "newItems"

//fixme
// confirmation when deleting recipe
// undo categorizing newitems
// add posibility to edit existing recipe?
// caseString() in adding recipe
// clear items in todoist after import
// keep items in recipes after added to list?
// add item suggestions
// external context
// add error mesages
// seperate index export files


export const App = () => (
    <Loader>
        <View/>
    </Loader>
)