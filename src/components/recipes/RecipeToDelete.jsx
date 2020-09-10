import React, {useContext, useState} from "react";
import {DeleteRecipe} from "../../scripts/firebaseCRUD";
import Grid from "@material-ui/core/Grid";
import {Text} from "../shared/style/Text";
import {Button} from "../shared/style/Button";
import {LoadItems} from "../shared/DataLoader";

const RecipeToDelete = ({recipe}) => {
    const Data = useContext(LoadItems);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleDelete = (recipe) => {
        DeleteRecipe(recipe, 'recipes')
        Data.fetchRecipes();
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs>
                <Text inline>{recipe.name}</Text>
            </Grid>
            {confirmDelete ?
                <>
                    <Grid item>
                        <Button onClick={()=> handleDelete(recipe)}>
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