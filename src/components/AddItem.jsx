import React, {useContext, useRef, useState} from "react";
import {Button} from "./style/Button";
import {Create} from "../scripts/firebaseCRUD";
import {CategorizeItem} from "../scripts/categorizeItems";
import {caseString} from "../scripts/FormatText";
import AppData from "./App";
import {Input} from "./style/Input";

/**
 * Section for form to add new items to the list
 */

const AddItem = () => {
    const Data = useContext(AppData)
    const [amount, setAmount] = useState(1)
    const newItem = useRef(); // <input> add item

    const handleSubmit = () => {
        const item = newItem.current;

        if (item.value !== '') {
            //todo async?
            let category = CategorizeItem(item.value, Data.reference_list)
            Create(Data.items, {
                name: caseString(item.value),
                category: category,
                amount: amount
            }).catch((e) => console.error(e));
            Data.updateData()
        }

        setAmount(1);
        item.value = '';
        item.focus()
    }

    return (
        <>
            <Input addItem ref={newItem} onKeyPress={e => {
                if (e.key === "Enter") {
                    handleSubmit()
                }
            }}/>

            <Button decreaseAmount onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                if (amount > 1) {
                    setAmount(amount - 1);
                }
            }}>
                -
            </Button>

            <Input addAmount value={amount} name="amount"/>

            <Button increaseAmount onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                setAmount(amount + 1)
            }}>
                +
            </Button>

            <Button onClick={() => {
                handleSubmit()
            }}>
                Add
            </Button>
        </>
    )
}

export default AddItem;