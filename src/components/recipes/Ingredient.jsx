import React, {useEffect, useRef, useState} from "react";
import {Row} from "../shared/style/Row";
import {Text} from "../shared/style/Text";
import {Button} from "../shared/style/Button";
import {Input} from "../shared/style/Input";
import {caseString} from "../../scripts/formatText";

const Ingredient = ({thisIngredient, ingredients, setIngredients}) => {
    const [isUpdateable, setUpdatable] = useState(false);
    const amount = useRef()
    const updateItem = useRef()

    useEffect(() => {
        if (isUpdateable) {
            updateItem.current.focus()
            updateItem.current.select()
        }
    }, [isUpdateable])

    const handleDecreaseAmount = () => {
        thisIngredient.amount -= 1
        amount.current.value -= 1;
    }

    const handleIncreaseAmount = () => {
        let n = thisIngredient.amount
        n++;
        thisIngredient.amount = n
        amount.current.value = n;
    }

    const handleDeleteIngredient = () => {
        //todo oneline?
        let arr = []
        ingredients.forEach(ingredient => {
            if (ingredient !== thisIngredient) {
                arr.push(ingredient)
            }
        });

        setIngredients(arr)
    }

    return (
        <Row>
            {
                isUpdateable ?
                    <>
                        <Input addItem
                               ref={updateItem}
                               defaultValue={caseString(thisIngredient.name)}
                               onChange={(e) => thisIngredient.name = e.target.value}/>

                        <Button decreaseAmount onClick={() => handleDecreaseAmount()}>
                            -
                        </Button>

                        <Input addAmount ref={amount} value={thisIngredient.amount}/>

                        <Button increaseAmount onClick={() => handleIncreaseAmount()}>
                            +
                        </Button>

                        <Button onClick={() => {
                            setUpdatable(false)
                        }}>Apply</Button>
                    </>
                    :
                    <>
                        <Text ingredient key={thisIngredient.id}
                              onClick={() => setUpdatable(true)}>
                            {thisIngredient.amount} {thisIngredient.name}
                        </Text>

                        <Button rightAligned onClick={() => handleDeleteIngredient()}>
                            Delete
                        </Button>
                    </>
            }
        </Row>
    )
}

export default Ingredient