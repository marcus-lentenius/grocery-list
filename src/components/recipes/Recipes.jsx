import React, {useContext} from "react";
import Recipe from "./Recipe";
import {LoadItems} from "../shared/DataLoader";
import AddRecipe from "./AddRecipe";
import Drawer from "../Drawer";
import {Button} from "../shared/style/Button";

const Recipes = () => {
    const Data = useContext(LoadItems);

    const DrawerContent = [
        <AddRecipe/>
    ]

    return (
        <>
            <Drawer anchor={'right'} content={DrawerContent} disableClickToClose={true}/>

            {Data.recipes.map(recipe => (
                <Recipe recipe={recipe} key={recipe.name}/>
            ))}
        </>
    )
}
export default Recipes