import React, {useEffect, useRef, useState} from "react";
import {Input} from "../shared/style/Input";
import Grid from "@material-ui/core/Grid";
import {Text} from "../shared/style/Text";
import {caseString} from "../../scripts/formatText";
import {Button} from "../shared/style/Button";


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
        <Grid container>
            {
                isUpdateable ?
                    <>
                        <Grid item xs>
                            <Input addItem
                                   ref={updateItem}
                                   defaultValue={caseString(thisIngredient.name)}
                                   onChange={(e) => thisIngredient.name = e.target.value}/>
                        </Grid>

                        <Grid item>
                            <Button variant={"contained"} disableElevation size="small"  decreaseAmount onClick={() => handleDecreaseAmount()}>
                                -
                            </Button>

                            <Input addAmount ref={amount} value={thisIngredient.amount}/>

                            <Button variant={"contained"} disableElevation size="small"  increaseAmount onClick={() => handleIncreaseAmount()}>
                                +
                            </Button>

                            <Button variant={"contained"} disableElevation size="small"  onClick={() => {
                                setUpdatable(false)
                            }}>Apply</Button>
                        </Grid>
                    </>
                    :
                    <>
                        <Grid item xs>
                            <Text ingredient key={thisIngredient.id}
                                  onClick={() => setUpdatable(true)}>
                                {thisIngredient.amount} {thisIngredient.name}
                            </Text>
                        </Grid>
                        <Grid item>
                            <Button variant={"contained"} disableElevation size="small"  onClick={() => handleDeleteIngredient()}>
                                Delete
                            </Button>
                        </Grid>
                    </>
            }
        </Grid>
    )
}

export default Ingredient