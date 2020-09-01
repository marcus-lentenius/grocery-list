import React, {useContext, useEffect, useState} from 'react'
import {Button} from '../shared/style/Button'
import Recipe from "./Recipe";
import {Center} from "../shared/style/Center";
import {LoadItems} from "../shared/DataLoader";

const RecipeButtons = () => {
    const Data = useContext(LoadItems);
    const [recipes, setRecipes] = useState([])
    const [showRecipe, setShowRecipe] = useState(false);
    const [recipeId, setRecipeId] = useState()

    useEffect(() => {
        setRecipes(Data.recipes)
    }, [Data])

    const handleOnClick = (id) => {
        setShowRecipe(true);
        setRecipeId(id)
    }

    const unMountRecipe = () => {
        setShowRecipe(false);
    }

    return (
        <>

            {showRecipe ? <Recipe recipeId={recipeId}
                                  unMountRecipe={unMountRecipe}/> : null}
            <Center>
                {recipes.map(recipe => (
                    <Button recipe
                            key={recipe.id}
                            onClick={() => {
                                handleOnClick(recipe.id)
                            }}
                    >{recipe.name}</Button>
                ))}
            </Center>
        </>
    )
}

export default RecipeButtons