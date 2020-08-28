import React, {useEffect, useRef, useState} from "react";
import {InputField} from "../style/InputField";
import {ListRow} from "../style/ListRow";
import {Ingredient} from "./style/Ingredient";
import {CreateRecipe} from "../../scripts/firebaseCRUD";

//todo single purpose
const AddRecipe = () => {
    const [ingredients, setIngredients] = useState([])
    const [name, setName] = useState('')

    const ingredientRef = useRef(null);
    const amountRef = useRef(null);
    const nameRef = useRef(null);

    //todo rename
    const recipeObj = {
        name: name,
        ingredients: ingredients,
        id: Math.round(Math.random() * (99999999 - 11111111) + 11111111)
    }

    useEffect(() => {
        ingredientRef.current.focus()
    }, [ingredients])

    const Recipe = () => (
        <>
            {
                ingredients.map(currentIngredient =>
                    <ListRow>
                        <Ingredient
                            key={currentIngredient.id}>{currentIngredient.amount} {currentIngredient.ingredient}</Ingredient>
                        <button onClick={() => {
                            //todo oneline?
                            let arr = []
                            ingredients.forEach(ingredient => {
                                if (ingredient !== currentIngredient) {
                                    arr.push(ingredient)
                                }
                            });
                            setIngredients(arr)
                        }}>delete
                        </button>
                    </ListRow>
                )
            }
        </>
    )
    const AddIngredient = () => {
        return (
            <ListRow>
                <InputField ref={ingredientRef} id={"ingredient"} placeholder={"Ingredient"}
                            onKeyPress={e => handleKeyPress(e)}/>
                <InputField ref={amountRef} id={"amount"} placeholder={"Antal"} onKeyPress={e => handleKeyPress(e)}/>
                <button onClick={e => {
                    handleAddIngredient();
                }}>Add
                </button>
            </ListRow>
        )
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddIngredient()
        }
    }

    const handleAddIngredient = (e) => {
        let ingredient = ingredientRef.current
        let amount = amountRef.current

        const reg = new RegExp('^[0-9]$');

        if (amount.value !== '' && !reg.test(amount.value)) {
            console.log('fel eller inget nummer amount')
        } else if (ingredient.value === '') {
            console.log('inget namn')
        } else {
            ingredients.push({
                ingredient: ingredient.value,
                amount: amount.value === '' ? 1 : amount.value,
            });

            setIngredients([...ingredients]);
            ingredient.value = '';
            amount.value = '';
        }

    }

    const handleSubmit = () => {
        console.log(recipeObj)
        CreateRecipe(recipeObj);
        setName('')
        setIngredients([])
        nameRef.current.value = '';
        ingredientRef.current.value = '';
        amountRef.current.value = '';
    }


    return (
        <>
            <ListRow>
                <InputField
                    ref={nameRef}
                    id={"name"}
                    onChange={(e) => {
                        setName(e.target.value)
                        // recipeObj.name = e.target.value
                        // console.log(recipeObj)
                    }}
                    placeholder={"Namn"}/>
            </ListRow>
            <Recipe/>
            <AddIngredient/>
            <ListRow>
                <button onClick={e => {
                    handleSubmit(e)
                }}>sub
                </button>
            </ListRow>
        </>
    );
}

export default AddRecipe