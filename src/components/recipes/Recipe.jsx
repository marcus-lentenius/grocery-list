import React, {useContext, useEffect, useState} from "react";
import {RecipeBackground} from "./style/RecipeBackground";
import {Text} from "../shared/style/Text";
import {Center} from "../shared/style/Center";
import {Row} from "../shared/style/Row";
import {Button} from "../shared/style/Button";
import {Create, DeleteRecipe} from "../../scripts/firebaseCRUD";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {caseString} from "../../scripts/formatText";
import {LoadItems} from "../shared/DataLoader";

const Recipe = ({recipeId, unMountRecipe}) => {
    const Data = useContext(LoadItems);
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        setRecipes(Data.recipes)
    }, [Data])

    // Adds items from the recipe to the grocery list
    const handleOnClick = (name, amount) => {
        const category = CategorizeItem(name, Data.reference_list)
        Create(Data.items, {name: caseString(name), category: category, amount: amount})
        Data.fetchItems()
    };

    const handleDelete = (recipe) => {
        DeleteRecipe(recipe, 'recipes')
        Data.updateData('recipes');
        unMountRecipe()
    }

    return (
        <>
            <RecipeBackground
                onClick={() => unMountRecipe()}/>
            {recipes.filter(recipe => recipe.id === recipeId)
                .map(recipe => (
                        <Center recipe>
                            <Text recipeHeadline>{recipe.name}</Text>
                            {
                                recipe.ingredients.map(ingredient => (
                                        <Row recipeIngredient>
                                            <Text>{ingredient.amount} {ingredient.name}</Text>
                                            <Button rightAligned onClick={(e) => {
                                                handleOnClick(ingredient.name, ingredient.amount);
                                                e.target.parentNode.remove()
                                            }}>Lägg till</Button>
                                        </Row>
                                    )
                                )
                            }
                            <Button onClick={() => handleDelete(recipe)}>
                                Delete
                            </Button>
                            <Button rightAligned onClick={() => unMountRecipe()}>
                                Close
                            </Button>
                        </Center>
                    )
                )
            }
        </>
    )
}

export default Recipe;