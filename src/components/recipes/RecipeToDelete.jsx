import React, {useContext, useState} from "react";

import Grid from "@material-ui/core/Grid";

import {removeRecipe} from "../../scripts";
import {Button, ContextData, Text} from "../shared";

const RecipeToDelete = ({recipe}) => {
    const Data = useContext(ContextData);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDelete = (recipe) => {
        removeRecipe(recipe, 'recipes')
        // Data.fetchRecipes();
        Data.updateData('recipes')
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs>
                <Text inline>{recipe.name}</Text>
            </Grid>
            {confirmDelete ?
                <>
                    <Grid item>
                        <Button onClick={() => handleDelete(recipe)}>
                            Yes
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => {
                            setConfirmDelete(false)
                        }}>
                            No
                        </Button>
                    </Grid>
                </>
                :
                <Button rightAligned onClick={() => {
                    setConfirmDelete(true)
                }}>
                    Delete
                </Button>
            }
        </Grid>
    )
}

export default RecipeToDelete