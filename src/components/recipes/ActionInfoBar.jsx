import React, {useContext, useRef, useState} from "react";
import {InfoBar} from "./style/InfoBar";
import Grid from "@material-ui/core/Grid";
import {Text} from "../shared/style/Text";
import {Button} from "../shared/style/Button";
import Fade from "@material-ui/core/Fade";
import Popper from "@material-ui/core/Popper";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {LoadItems} from "../shared/DataLoader";
import Box from "@material-ui/core/Box";
import {unmountComponentAtNode} from "react-dom";
import {Create} from "../../scripts/firebaseCRUD";
import {caseString} from "../../scripts/formatText";


const ActionInfoBar = ({amount, name}) => {
    const Data = useContext(LoadItems);
    const [open, setOpen] = useState(false)

    // Adds items from the recipe to the grocery list
    const handleOnClick = (name, amount) => {
        const category = CategorizeItem(name, Data.reference_list);
        Create(Data.items, {name: caseString(name), category: category, amount: amount})
        Data.fetchItems()
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