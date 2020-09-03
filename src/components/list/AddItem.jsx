import React, {useContext, useRef, useState} from "react";
import {Button} from "../shared/style/Button";
import {Create} from "../../scripts/firebaseCRUD";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {caseString} from "../../scripts/formatText";
import {Input} from "../shared/style/Input";
import {LoadItems} from "../shared/DataLoader";
import {Wrapper} from "../shared/style/Wrapper";

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
            if (category !== '') {
                Data.updateData('newItems');
            }
        }

        setAmount(1);
        item.value = '';
        item.focus()
    }

    return (
        <Wrapper addItem>
            <Wrapper stretch>
                <Input addItem ref={newItem} onKeyPress={e => {
                    if (e.key === "Enter") {
                        handleSubmit()
                    }
                }}/>
            </Wrapper>
            <Wrapper>
                <Button decreaseAmount onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (amount > 1) {
                        setAmount(amount - 1);
                    }
                }}>
                    -
                </Button>
                {/*//todo add manually?*/}
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
            </Wrapper>
        </Wrapper>
    )
}

export default AddItem;