import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {Text} from "./shared";
import Drawer from "./shared/Drawer";
import Box from "@material-ui/core/Box";
import Button from "./shared/style/Button";
import {fireBase} from "../scripts";
import {DrawerContent} from "./list";

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

const Menu = () => {
    const logOut = () => {
        fireBase.auth().signOut().then(function () {
            // Sign-out successful.
            window.location.reload()
        }).catch(function (error) {
            // An error happened.
        });
    }

    const DrawerContent = () => {
        return (
        <Box key={"app_drawer_content"} height="85vh" width="200px" display="flex" alignItems="flex-end">
            <Box m="10px" position="absolute" top="0">
                <Button onClick={logOut}>Log out</Button>
            </Box>
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
    )
}
    return (
        <>
            <Drawer anchor={'left'}>
                <DrawerContent/>
            </Drawer>

            <Redirect to='/list'/>
        </>
    );
}

export default Menu