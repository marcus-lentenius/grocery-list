import React, {useEffect, useRef, useState} from "react";

import Grid from "@material-ui/core/Grid";

import {Button, Input, Text} from "../shared";
import {caseString} from "../../scripts";


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
        let arr = []

        ingredients.forEach(ingredient => {
            if (ingredient !== thisIngredient) {
                arr.push(ingredient)
            }
        });

        setIngredients(arr)
    }

    const UpdateableIngredient = () => (
        <Grid container spacing={1}>
            <Grid item xs>
                <Input autoComplete="off"
                       ref={updateItem}
                       defaultValue={caseString(thisIngredient.name)}
                       onChange={(e) => thisIngredient.name = caseString(e.target.value)}/>
            </Grid>
            <Grid item>
                <Button variant={"contained"} disableElevation size="small" decreaseAmount
                        onClick={() => handleDecreaseAmount()}>
                    -
                </Button>

                <Input addAmount
                       autoComplete="off"
                       ref={amount}
                       value={thisIngredient.amount}/>

                <Button variant={"contained"} disableElevation size="small" increaseAmount
                        onClick={() => handleIncreaseAmount()}>
                    +
                </Button>
            </Grid>
            <Grid item>
                <Button variant={"contained"} disableElevation size="small" onClick={() => {
                    setUpdatable(false)
                }}>Apply</Button>
            </Grid>
        </Grid>
    );

    return (
        <>
            {
                isUpdateable ?
                    <UpdateableIngredient/>
                    :
                    <Grid container spacing={1}>
                        <Grid item xs>
                            <Text ingredient key={thisIngredient.id}
                                  onClick={() => setUpdatable(true)}>
                                {thisIngredient.amount} {thisIngredient.name}
                            </Text>
                        </Grid>
                        <Grid item>
                            <Button variant={"contained"} disableElevation size="small"
                                    onClick={() => handleDeleteIngredient()}>
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
            }
        </>
    )
}

export default Ingredient