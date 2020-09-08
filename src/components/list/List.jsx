import React, {useContext, useEffect, useState} from "react";
import AddItem from "./AddItem";
import Category from "./Category";
import {LoadItems} from "../shared/DataLoader";
import {caseString} from "../../scripts/formatText";
import {Text} from "../shared/style/Text";
import AppBar from "@material-ui/core/AppBar";
import {Button} from "../shared/style/Button";
import Drawer from "../Drawer";
import Box from "@material-ui/core/Box";


const List = () => {
    const Data = useContext(LoadItems);
    const [suggestionList, setSuggestionList] = useState([])
    const [historyList, setHistoryList] = useState([])

    //todo create date seperator in history

    //todo cleanup
    useEffect(() => {
        setHistoryList(Data.history.sort((a, b) => {
            return b.date - a.date;
        }))

        const arr = Data.history
        arr.sort()
        let counts = {};
        arr.forEach(function (item) {
            counts[item.name] = (counts[item.name] || 0) + 1;
        });
        const arr2 = []
        Object.entries(counts).map((key, index) => {
            arr2.push({name: key[0], amount: key[1]});
        })
        const arr3 = arr2.sort((a, b) => {
            return b.amount - a.amount;
        });
        setSuggestionList(arr3)
    }, [Data.history])

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

    const formatDate = (ms) => {
        const date = new Date(ms);

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return day + "/" + month + "/" + year;
    }

    const RenderHistory = () => {
        let date;
        const list = []
        {
            historyList.map(item => {

                if (date === formatDate(item.date)) {
                    list.push(
                        <Text key={'history_' + item.id}>
                            {item.name}
                        </Text>
                    );
                } else {
                    date = formatDate(item.date);
                    if (list.length === 0) {
                        list.push(
                            <Text key={'history_' + item.id}>
                                {item.name}
                            </Text>
                        );
                    } else {
                        list.push(
                            <>
                                <Text key={date}>
                                    {date}
                                </Text>
                                <Text key={'history_' + item.id}>
                                    {item.name}
                                </Text></>
                        );
                    }
                }
            })
        }
        return (
            list.map(item => item)
        )
    }

    const DrawerContent = [
        <>
            <Button variant={"contained"} disableElevation size="small" style={importStyle} onClick={() => {
                Data.importFromTodoist()
            }}>
                Import from Todoist
            </Button>
            <Text>History:</Text>
            <Box>
                <RenderHistory/>
            </Box>
            <Text>Suggestions:</Text>
            <Box>
                {suggestionList.map(item =>
                    <Text key={"suggestion_" + item.name}>{item.name} {item.amount}</Text>
                )}
            </Box>
        </>
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