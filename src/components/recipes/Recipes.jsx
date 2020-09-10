import React, {useContext, useState} from "react";
import Recipe from "./Recipe";
import {LoadItems} from "../shared/DataLoader";
import AddRecipe from "./AddRecipe";
import Drawer from "../Drawer";
import {Button} from "../shared/style/Button";
import {DeleteRecipe} from "../../scripts/firebaseCRUD";
import {Text} from "../shared/style/Text";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import RecipeToDelete from "./RecipeToDelete";

const Recipes = () => {
    const Data = useContext(LoadItems);

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