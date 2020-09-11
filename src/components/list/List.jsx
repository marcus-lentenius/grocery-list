import React, {useContext, useEffect, useState} from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";

import {Button, Drawer, ContextData, Text} from "../shared";
import {caseString} from "../../scripts";
import {AddItem, Category, History, SuggestedItem} from "./";


const List = () => {
    const Data = useContext(ContextData);
    const [suggestionList, setSuggestionList] = useState([])

    useEffect(() => {
        let counts = {};

        Data.history.sort()

        Data.history.forEach(function (item) {
            counts[item.name] = (counts[item.name] || 0) + 1;
        });

        const sortedHistory = []

        Object.entries(counts).map((key, index) => {
            sortedHistory.push({name: key[0], amount: key[1]});
        })

        sortedHistory.sort((a, b) => {
            return b.amount - a.amount;
        });

        setSuggestionList(sortedHistory)
    }, [Data.history])

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

    const DrawerContent = [
        <Box key={"list_drawer_content"} mx={1} width={300} maxWidth={300}>

            <Box mb="2vh" width={1} height="23vh" display="flex" justifyContent="center" alignItems="flex-end">
                <Button onClick={Data.importFromTodoist}>
                    Import from Todoist
                </Button>
            </Box>

            <Box px="10px" pt="10px" height="25vh" overflow="auto" border={1} borderRadius={5}>
                <Text mediumHeadline>Suggestions:</Text>
                {suggestionList.map(item =>
                    <SuggestedItem key={"suggestion_" + item.name} item={item}/>
                )}

            </Box>
            <Box bgcolor="#f7f7f7" mt="1vh" px="10px" pt="10px" height="49vh" overflow="auto" border={1}
                 borderRadius={5}>
                <Text mediumHeadline>History:</Text>

                <Grid container>
                    <History/>
                </Grid>
            </Box>
        </Box>
    ]

    return (
        <>
            <Drawer anchor={'right'} content={DrawerContent} disableClickToClose={true} position={"bottom"}/>

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