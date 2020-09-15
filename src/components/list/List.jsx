import React, {useContext, useState} from "react";
import AppBar from "@material-ui/core/AppBar";

import {ContextData, Drawer, Text} from "../shared";
import {caseString, getId} from "../../scripts";
import {AddItem, Category, DrawerContent} from "./";
import Item from "./Item";


const List = () => {
    const Data = useContext(ContextData);
    const [showCategories, setShowCategories] = useState(true);

    const sortingOrder = Data.sorting_order.map(category => caseString(category))
    let category = [...new Set(Data.items.map(item => item.category))];

    //todo if required?
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
                <DrawerContent setShowCategories={setShowCategories}/>
            </Drawer>

            <Text groceryListHeadline>
                Grocery list
            </Text>

            {showCategories ?
                <>
                    {
                        category.map(category => (
                            <Category key={'list_' + category} category={category}/>
                        ))
                    }
                </>
                :
                <>
                    {
                        Data.items.map(item =>
                            <Item key={'category_' + item.name + getId()} item={item}/>
                        )
                    }
                </>
            }

            <AppBar position="fixed" style={appBarStyle}>
                <AddItem/>
            </AppBar>
        </>
    );
}

export default List;