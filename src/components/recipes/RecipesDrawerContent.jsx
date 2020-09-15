import {Box} from "@material-ui/core";
import {AddRecipe, RecipeToDelete} from "./index";
import React, {useContext} from "react";
import {ContextData} from "../shared";

const RecipesDrawerContent = () => {
    const Data = useContext(ContextData);

    return (
        <Box mx={1} width="350px" key={"recipe_drawer"}>
            <Box pt="40px">
                <AddRecipe/>
            </Box>
            <Box pt="40px">
                {Data.recipes.map(recipe => <RecipeToDelete key={"delete_" + recipe.id} recipe={recipe}/>)}
            </Box>
        </Box>
    )
}
export default RecipesDrawerContent