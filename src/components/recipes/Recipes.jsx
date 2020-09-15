import React, {useContext} from "react";

import {Recipe, RecipesDrawerContent} from "./";
import {ContextData, Drawer} from "../shared";

const Recipes = () => {
    const Data = useContext(ContextData);

    return (
        <>
            <Drawer anchor={'right'} disableClickToClose={true}>
                <RecipesDrawerContent/>
            </Drawer>

            {Data.recipes.map(recipe => (
                <Recipe recipe={recipe} key={"recipe_" + recipe.id}/>
            ))}
        </>
    )
}
export default Recipes