import React, {useContext, useEffect, useRef, useState} from "react";
import {Row} from "../shared/style/Row";
import {Button} from "../shared/style/Button";
import {Input} from "../shared/style/Input";
import {CreateRecipe} from "../../scripts/firebaseCRUD";
import AddIngredient from "./AddIngredient";
import Ingredient from "./Ingredient";
import {getId} from "../../scripts/idGenerator";
import {LoadItems} from "../shared/DataLoader";

/**
 * Renders form for adding recipe
 */

const AddRecipe = () => {
    const Data = useContext(LoadItems);
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
                name: ingredient.value,
                amount: parseInt(amount.value === '' ? 1 : amount.value),
            });

            setIngredients([...ingredients]);
            ingredient.value = '';
            amount.value = '';
        }
    }

    const handleSubmit = async () => {
        if (nameRef.current.value) {
            recipe.name = nameRef.current.value;
        } else {
            console.log('inget namn på recept')
        }
        await CreateRecipe(recipe);
        Data.fetchRecipes()

        setIngredients([])
        nameRef.current.value = '';
        ingredientRef.current.value = '';
        amountRef.current.value = '';
    }

    return (
        <>
            <Row>
                <Input recipeName
                       ref={nameRef}
                       id={"name"}
                       onChange={(e) => {
                           recipe.name = e.target.value
                       }}
                       placeholder={"Namn"}/>
            </Row>
            {
                ingredients.map(ingredient =>
                    <Ingredient thisIngredient={ingredient}
                                ingredients={ingredients}
                                setIngredients={setIngredients}/>)
            }
            <AddIngredient ingredientRef={ingredientRef}
                           amountRef={amountRef}
                           handleAddIngredient={handleAddIngredient.bind(this)}/>
            <Row>
                <Button rightAligned onClick={e => {
                    handleSubmit(e)
                }}>
                    Add Recipe
                </Button>
            </Row>
            <Row>

            </Row>
        </>
    )
}
export default AddRecipe