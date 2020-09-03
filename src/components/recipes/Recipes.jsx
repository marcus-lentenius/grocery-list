import React from "react";
import AddRecipe from "./AddRecipe";
import RecipeButtons from "./RecipeButton";
import {Wrapper} from "../shared/style/Wrapper";

const Recipes = () => {
    return (
        <Wrapper main>
            <AddRecipe/>
            <RecipeButtons/>
        </Wrapper>
    )
}
export default Recipes