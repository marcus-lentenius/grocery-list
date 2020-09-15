import React, {useContext} from "react";

import {Box} from "@material-ui/core";

import {AddRecipe, Recipe, RecipeToDelete} from "./";
import {Drawer, ContextData} from "../shared";

const Recipes = () => {
    const Data = useContext(ContextData);

    const DrawerContent = [
        <Box mx={1} width="350px" key={"recipe_drawer"}>
            <Box pt="40px">
                <AddRecipe/>
            </Box>
            <Box pt="40px">
                {Data.recipes.map(recipe => <RecipeToDelete key={"delete_" + recipe.id} recipe={recipe}/>)}
            </Box>
        </Box>
    ]

    return (
        <>
            <Drawer anchor={'right'} content={DrawerContent} disableClickToClose={true}/>

            {Data.recipes.map(recipe => (
                <Recipe recipe={recipe} key={"recipe_" + recipe.id}/>
            ))}
        </>
    )
}
export default Recipes