import React, {useContext} from "react";

import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import {ContextData, Text} from "../shared";
import {createHistoryItem, remove} from "../../scripts";
//todo bordercolor "secondary"
const Item = ({item}) => {
    const Data = useContext(ContextData);
    return (
        <Box
            borderColor="#c8e6c9"
            borderTop={1}
            pl={2}>

            <Grid container>
                <Grid item xs>
                    <Text item>
                        {item.amount === 1 ? null : item.amount} {item.name}
                    </Text>
                </Grid>
                <Grid item>
                    <Icon
                        fontSize={"large"}
                        color={"primary"}
                        onClick={() => {
                            createHistoryItem(item)
                            remove(item, 'items');
                            Data.updateData('items')
                            Data.updateData('history')
                            // Data.fetchItems();
                            // Data.fetchHistory();
                        }}>
                        radio_button_unchecked_outlined
                    </Icon>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Item;