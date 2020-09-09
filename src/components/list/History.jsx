import {Text} from "../shared/style/Text";
import React, {useContext, useEffect, useState} from "react";
import {LoadItems} from "../shared/DataLoader";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {CheckBox} from "../shared/style/CheckBox";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Icon from "@material-ui/core/Icon";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {Create, Delete} from "../../scripts/firebaseCRUD";
import {caseString} from "../../scripts/formatText";
import Box from "@material-ui/core/Box";

const formatDate = (ms) => {
    const date = new Date(ms);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return day + "/" + month + "/" + year;
}

export const History = () => {
    const Data = useContext(LoadItems);
    const [historyList, setHistoryList] = useState([])

    let date;
    const list = []

    useEffect(() => {
        setHistoryList(Data.history.sort((a, b) => {
            return b.date - a.date;
        }))
    }, [Data.history])

    const Item = ({item}) => (
        <>
            <Grid container>
                <Grid item xs>
                    <Text history>
                        {item.name}
                    </Text>
                </Grid>
                <Grid item>
                    <Box position="relative" pt="9px">
                    <Icon mt="5px"
                        fontSize="small"
                        color="disabled"
                        onClick={() => {
                            let category = CategorizeItem(item.name, Data.reference_list)
                            Create(Data.items, {
                                name: caseString(item.name),
                                category: category,
                            })
                            Delete(item, 'history')
                            Data.fetchHistory()
                            Data.fetchItems()
                        }}
                    >
                            check_circle_outline
                        </Icon>
                    </Box>
                </Grid>
            </Grid>
            <Divider width="100%" top="-5px"/>
        </>
    )

    {
        historyList.map(item => {
                if (date === formatDate(item.date)) {
                    list.push(
                        <Item key={item.id + "_history"} item={item}/>
                    );
                } else {
                    date = formatDate(item.date);
                    if (list.length === 0) {
                        list.push(
                            <Item key={item.id + "_history"} item={item}/>
                        );
                    } else {
                        list.push(
                            <>
                                <Text key={item.id + "_history_date"} historyDate>
                                    {date}
                                </Text>

                                <Item key={item.id + "_history"} item={item}/>
                            </>
                        );
                    }
                }
            }
        )
    }

    return (
        list.map(item => item)
    )
}