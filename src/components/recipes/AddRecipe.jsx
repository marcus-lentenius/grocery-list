import React, {useContext, useEffect, useRef, useState} from "react";

import {Box} from "@material-ui/core";

import {Button, Input, ContextData} from "../shared";
import {caseString, createRecipe, getId} from "../../scripts";
import {AddIngredient, Ingredient} from "./";

/**
 * Renders form for adding recipe
 */

const AddRecipe = () => {
    const Data = useContext(ContextData);
    const [ingredients, setIngredients] = useState([])

    const ingredientRef = useRef(null);
    const amountRef = useRef(null);
    const nameRef = useRef(null);

    const recipe = {
        name: '',
        ingredients: ingredients,
        id: getId()
    }

    useEffect(() => {
        ingredientRef.current.focus()
    }, [ingredients])


    const handleAddIngredient = () => {
        let ingredient = ingredientRef.current
        let amount = amountRef.current

        const reg = new RegExp('^[0-9]*$');

        if (amount.value !== '' && !reg.test(amount.value)) {
            // todo error message
            console.log('fel eller inget nummer amount')
        } else if (ingredient.value === '') {
            console.log('inget namn')
        } else {
            ingredients.push({
                name: caseString(ingredient.value,),
                amount: parseInt(amount.value === '' ? 1 : amount.value),
            });

            setIngredients([...ingredients]);
            ingredient.value = '';
            amount.value = '';
        }
    }

    const handleSubmit = async () => {
        if (nameRef.current.value) {
            recipe.name = caseString(nameRef.current.value);
        } else {
            console.log('inget namn på recept')
        }
        await createRecipe(recipe);
        // Data.fetchRecipes()
        Data.updateData('recipes')

        setIngredients([])
        nameRef.current.value = '';
        ingredientRef.current.value = '';
        amountRef.current.value = '';
    }

    return (
        <>
            <Box mb={1}>
                <Input autoComplete="off"
                       ref={nameRef}
                       id={"name"}
                       onChange={(e) => {
                           recipe.name = e.target.value
                       }}
                       placeholder={"Namn"}/>
            </Box>
            <Box mb={1}>
                {
                    ingredients.map(ingredient =>
                        <Ingredient thisIngredient={ingredient}
                                    ingredients={ingredients}
                                    setIngredients={setIngredients}/>)
                }
            </Box>
            <Box mb={1}>
                <AddIngredient ingredientRef={ingredientRef}
                               amountRef={amountRef}
                               handleAddIngredient={handleAddIngredient.bind(this)}/>
            </Box>
            <Box>
                <Button onClick={e => {
                    handleSubmit(e)
                }}>
                    Add Recipe
                </Button>
            </Box>
        </>
    )
}
export default AddRecipe