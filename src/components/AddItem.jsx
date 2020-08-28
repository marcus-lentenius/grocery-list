import React, {useContext, useState} from "react";
import {AddItemTextField} from "./style/AddItemTextField";
import {Button, CustomButton, TestButton} from "./style/Button";
import {Create, UpdateItem} from "../scripts/firebaseCRUD";
import {CategorizeItem} from "../scripts/categorizeItems";
import {caseString} from "../scripts/FormatText";
import AppData from "./App";

const AddItem = () => {
    const Data = useContext(AppData)
    const [amount, setAmount] = useState(1)

    return (
            <form onSubmit={async (e) => {
                e.preventDefault()
                e.persist();

                if (e.target.addItem.value !== '') {
                    //todo async
                    let category = CategorizeItem(e.target.addItem.value, Data.reference_list)
                    Create(Data.items, {name: caseString(e.target.addItem.value), category: category, amount: amount}).catch((e) => console.error(e));
                    Data.updateData()
                }

                setAmount(1);
                e.target.addItem.value = '';
                e.target.addItem.focus()
            }}>

                <AddItemTextField addItem id="addItem"/>
                <Button>Add</Button>
                <CustomButton DecreaseAmount onClick={e=>{
                e.preventDefault();
                e.stopPropagation();
                if (amount > 1) {
                    setAmount(amount-1);
                }
            }}>-</CustomButton>
                <AddItemTextField addAmount value={amount} name="amount"/>
                <CustomButton IncreaseAmount onClick={e=>{
                    e.preventDefault();
                    e.stopPropagation();
                    setAmount(amount+1)
                }}>+</CustomButton>
            </form>
    )
}

export default AddItem;