import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {Text} from "./shared/style/Text";
import Drawer from "./Drawer";
import Box from "@material-ui/core/Box";
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
// shorten onClick single function
// new Item caseString category
// remove suggestions item after added
// remove history item after added
// add info flash "item added from recipe" when adding items from recipe

// <Box height="100vh" display="flex" alignItems="flex-end">

export const App = () => {
    const drawerContent = [
        <Box key={"app_drawer_content"} height="85vh" width="200px" display="flex" alignItems="flex-end">
            <Box width={1}>
                <Link key={"list"} to="/list" style={{textDecoration: 'none'}}>
                    <Text routerLink>
                        List
                    </Text>
                </Link>
                <Link key={"recipes"} to="/recipes" style={{textDecoration: 'none'}}>
                    <Text routerLink>
                        Recipes
                    </Text>
                </Link>
                <Link key={"newItems"} to="/newItems" style={{textDecoration: 'none'}}>
                    <Text routerLink>
                        New items
                    </Text>
                </Link>
            </Box>
        </Box>
    ]

    return (
        <>
            <Drawer anchor={'left'} content={drawerContent}/>
            <Redirect to='/recipes'/>
        </>
    );
}