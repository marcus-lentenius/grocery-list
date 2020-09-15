import React, {useContext, useRef, useState} from "react";

import Grid from "@material-ui/core/Grid";

import {caseString, categorizeItem, create} from "../../scripts";
import {Button, Input, ContextData} from "../shared";

/**
 * Section for form to add new items to the list
 */

const AddItem = () => {
    const Data = useContext(ContextData);
    const [amount, setAmount] = useState(1)
    const newItem = useRef(); // <input> add item

    const handleSubmit = () => {
        const item = newItem.current;

        if (item.value !== '') {
            let category = categorizeItem(item.value, Data.reference_list)
            create(Data.items, {
                name: caseString(item.value),
                category: category,
                amount: amount
            }).catch((e) => console.error(e));

            Data.updateData('items')
            if (category === '') {
                Data.updateData('newItems');
            }
        }

        setAmount(1);
        item.value = '';
        item.focus()
    }

    const sticky = {
        marginTop: "20px",
        position: "sticky",
        bottom: "10px",
    }

    return (
        <Grid container style={sticky} spacing={1}>
            <Grid item xs>
                <Input autoComplete="off"
                       ref={newItem}
                       onKeyPress={e => {
                           if (e.key === "Enter") {
                               handleSubmit()
                           }
                       }}/>
            </Grid>

            <Grid item style={{maxHeight: "32px"}}>
                <Button decreaseAmount onClick={e => {
                    newItem.current.focus();
                    e.preventDefault();
                    e.stopPropagation();
                    if (amount > 1) {
                        setAmount(amount - 1);
                    }
                }}>
                    -
                </Button>

                <Input addAmount
                       autoComplete="off"
                       onChange={e => {
                       }}
                       value={amount}
                       name="amount"/>

                <Button increaseAmount onClick={e => {
                    newItem.current.focus();
                    e.preventDefault();
                    e.stopPropagation();
                    setAmount(amount + 1)
                }}>
                    +
                </Button>
            </Grid>

            <Grid item>
                <Button variant={"contained"} disableElevation size="small" onClick={() => handleSubmit()}>
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}


export default AddItem;


