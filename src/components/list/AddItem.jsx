import React, {useContext, useRef, useState} from "react";
import {Create} from "../../scripts/firebaseCRUD";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {caseString} from "../../scripts/formatText";
import {Input} from "../shared/style/Input";
import {LoadItems} from "../shared/DataLoader";
import Grid from "@material-ui/core/Grid";
import {Button} from "../shared/style/Button";
import {Box} from "@material-ui/core";

/**
 * Section for form to add new items to the list
 */

const AddItem = () => {
    const Data = useContext(LoadItems);
    const [amount, setAmount] = useState(1)
    const newItem = useRef(); // <input> add item

    const handleSubmit = () => {
        const item = newItem.current;

        if (item.value !== '') {
            let category = CategorizeItem(item.value, Data.reference_list)
            Create(Data.items, {
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
        <Grid container style={sticky}>
            <Grid item xs>
                <Input addItem ref={newItem} onKeyPress={e => {
                    if (e.key === "Enter") {
                        handleSubmit()
                    }
                }}/>
            </Grid>

            <Grid item>
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

                <Input addAmount onChange={e=>{
                }} value={amount} name="amount"/>

                <Button increaseAmount onClick={e => {
                    newItem.current.focus();
                    e.preventDefault();
                    e.stopPropagation();
                    setAmount(amount + 1)
                }}>
                    +
                </Button>
                <Button variant={"contained"} disableElevation size="small" onClick={() => handleSubmit()}>
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}


export default AddItem;


