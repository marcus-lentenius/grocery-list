import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {Text} from "../shared/style/Text";
import Icon from "@material-ui/core/Icon";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {Create} from "../../scripts/firebaseCRUD";
import {caseString} from "../../scripts/formatText";
import Divider from "@material-ui/core/Divider";
import React, {useContext, useState} from "react";
import {LoadItems} from "../shared/DataLoader";

const SuggestedItem = ({item}) => {
    const Data = useContext(LoadItems);
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
                        color="disabled"
                        pt="5px"
                        height="100%"
                        onClick={() => {
                            setAddSuggestionIcon("check_circle_outline")
                            let category = CategorizeItem(item.name, Data.reference_list)
                            Create(Data.items, {
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