import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {Text} from "./shared";
import Drawer from "./shared/Drawer";
import Box from "@material-ui/core/Box";

//fixme
// stop marking when double click buttons
// undo categorizing newitems
// add posibility to edit existing recipe?
// clear items in todoist after import
// add error mesages
// seperate index export files
// shorten onClick single line function
// check all component keys
// tabindex in recipes drawer
// fix key props in recipe drawer
// clear new items and sort by date
// limit amount of suggested items
// loading screen

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
            <Redirect to='/list'/>
        </>
    );
}