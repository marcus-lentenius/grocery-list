import React, {useContext, useState} from "react"

import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Popper from "@material-ui/core/Popper";

import {InfoBar} from "./";
import {ContextData, Text, Button} from "../shared";
import {caseString, categorizeItem, create} from "../../scripts";


const ActionInfoBar = ({amount, name}) => {
    const Data = useContext(ContextData);
    const [open, setOpen] = useState(false)

    // Adds items from the recipe to the grocery list
    const handleOnClick = (name, amount) => {
        const category = categorizeItem(name, Data.reference_list);
        create(Data.items, {name: caseString(name), category: category, amount: amount})
        Data.updateData('items')
        // Data.fetchItems()
        setOpen(true);
        setTimeout(() => {
            setOpen(false)
        }, 2000);
    };

    return (
        <Grid container>
            <Grid item xs>
                <Text ingredient>{amount} {name}</Text>
            </Grid>
            <Grid item>
                <Button onClick={() => {
                    handleOnClick(name, amount);
                }}>
                    Add
                </Button>
                <Popper open={open} transition style={{
                    position: "unset",
                    top: "unset",
                    left: "unset"
                }}>
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <InfoBar>
                                <Text history>
                                    {name} added to list
                                </Text>
                            </InfoBar>
                        </Fade>
                    )}
                </Popper>
            </Grid>
        </Grid>
    )
}

export default ActionInfoBar