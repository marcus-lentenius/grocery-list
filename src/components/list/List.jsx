import React, {useContext} from "react";
import AddItem from "./AddItem";
import Category from "./Category";
import {LoadItems} from "../shared/DataLoader";
import {caseString} from "../../scripts/formatText";
import {Text} from "../shared/style/Text";
import AppBar from "@material-ui/core/AppBar";
import {Button} from "../shared/style/Button";
import Drawer from "../Drawer";


const List = () => {
    const Data = useContext(LoadItems);

    const sortingOrder = Data.sorting_order.map(category => caseString(category))
    let category = [...new Set(Data.items.map(item => item.category))];

    if (sortingOrder) {
        category.sort(function (a, b) {
            return sortingOrder.indexOf(a) - sortingOrder.indexOf(b);
        });
    }

    const appBarStyle = {
        top: 'auto',
        bottom: 0,
        padding: "0 16px 16px 16px",
        backgroundColor: "white"
    }
    const importStyle = {
        marginBottom: "80px",
        textAlign: "center",
        width: "100%",
        marginTop: "40px"
    }

    const DrawerContent = [
        <Button variant={"contained"} disableElevation size="small"  style={importStyle} onClick={() => {
            Data.importFromTodoist()
        }}>
            Import from Todoist
        </Button>
    ]

    return (
        <>
            <Drawer anchor={'right'} content={DrawerContent}/>

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