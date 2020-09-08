import React from 'react';
import {Link} from "react-router-dom";
import {Text} from "./shared/style/Text";
import Drawer from "./Drawer";
import List from "./list/List";
import Redirect from "react-router-dom/es/Redirect";

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
// stop marking when double click buttons
// order newItem categories
// routing & actions
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
// add 404
// background on addItem form
// recently added section?


export const App = () => {
    const drawerContent = [
        <Link key={"list"} to="/list" style={{textDecoration: 'none'}}>
            <Text routerLink>
                List
            </Text>
        </Link>,
        <Link key={"recipes"} to="/recipes" style={{textDecoration: 'none'}}>
            <Text routerLink>
                Recipes
            </Text>
        </Link>,
        <Link key={"newItems"} to="/newItems" style={{textDecoration: 'none'}}>
            <Text routerLink>
                New items
            </Text>
        </Link>
    ]

    return (
        <>
            <Drawer anchor={'left'} content={drawerContent}/>
            <Redirect to='/list'/>
        </>
    );
}