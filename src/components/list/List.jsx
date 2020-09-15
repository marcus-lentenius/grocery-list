import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";

import {ContextData, Drawer, Text} from "../shared";
import {caseString} from "../../scripts";
import {AddItem, Category, DrawerContent} from "./";


const List = () => {
    const Data = useContext(ContextData);

    const sortingOrder = Data.sorting_order.map(category => caseString(category))
    let category = [...new Set(Data.items.map(item => item.category))];

    if (sortingOrder) {
        category.sort(function (a, b) {
            return sortingOrder.indexOf(a) - sortingOrder.indexOf(b);
        });
    }

    //todo refactor for consistency
    const appBarStyle = {
        top: 'auto',
        bottom: 0,
        padding: "0 16px 16px 16px",
        backgroundColor: "white"
    }

    return (
        <>
            <Drawer anchor={'right'} disableClickToClose={true} position={"bottom"}>
                <DrawerContent/>
            </Drawer>

            <Text groceryListHeadline>
                Grocery list
            </Text>
            {
                category.map(category => (
                    <Category key={'list_' + category} category={category}/>
                ))
            }

            <AppBar position="fixed" style={appBarStyle}>
                <AddItem/>
            </AppBar>
        </>
    );
}

export default List;