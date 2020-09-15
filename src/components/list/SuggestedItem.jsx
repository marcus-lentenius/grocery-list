import React, {useContext, useState} from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";
import Divider from "@material-ui/core/Divider";

import {ContextData, Text} from "../shared";
import {caseString, categorizeItem, create} from "../../scripts";

const SuggestedItem = ({item}) => {
    const Data = useContext(ContextData);
    const [addSuggestionIcon, setAddSuggestionIcon] = useState("add_circle_outline");

    return (
        <Box position="relative">
            <Grid container alignItems="center">
                <Grid item xs>
                    <Text history>
                        {item.name} {item.amount}
                    </Text>
                </Grid>

                <Grid item>
                    <Icon
                        fontSize="small"
                        color="primary"
                        pt="5px"
                        height="100%"
                        onClick={() => {
                            setAddSuggestionIcon("check_circle_outline")
                            let category = categorizeItem(item.name, Data.reference_list)
                            create(Data.items, {
                                name: caseString(item.name),
                                category: category,
                            })
                            Data.updateData('items')
                        }}
                    >
                        {addSuggestionIcon}
                    </Icon>
                </Grid>
            </Grid>
            <Divider width="100%" top="-5px"/>
        </Box>
    )
}

export default SuggestedItem