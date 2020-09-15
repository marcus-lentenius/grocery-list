import Box from "@material-ui/core/Box";
import {Button, ContextData, Text} from "../shared";
import {History, SuggestedItem} from "./index";
import Grid from "@material-ui/core/Grid";
import React, {useContext, useEffect, useState} from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const DrawerContent = ({setShowCategories}) => {
    const Data = useContext(ContextData);
    const [suggestionList, setSuggestionList] = useState([])

    const [isSwitchChecked, setIsSwitchChecked] = useState(true)

    const switchSorted = () => {
        if (isSwitchChecked) {
            setIsSwitchChecked(false);
            setShowCategories(false)
        } else {
            setIsSwitchChecked(true);
            setShowCategories(true);
        }
    }

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

    return (
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
            <Box bgcolor="secondary" mt="1vh" px="10px" pt="10px" height="49vh" overflow="auto" border={1}
                 borderRadius={5}>
                <Text mediumHeadline>History:</Text>

                <Grid container>
                    <History/>
                </Grid>
            </Box>

            <Box mb={3} mt={1} ml={-2}>
                <FormControlLabel
                    control={<Switch color={"primary"} onChange={switchSorted} checked={isSwitchChecked}/>}
                    label="Sort List"
                    labelPlacement="start"
                />
            </Box>
        </Box>
    )
}

export default DrawerContent