import React, {useContext} from "react";
import Recipe from "./Recipe";
import {LoadItems} from "../shared/DataLoader";
import AddRecipe from "./AddRecipe";
import Drawer from "../Drawer";
import {Button} from "../shared/style/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import {DeleteRecipe} from "../../scripts/firebaseCRUD";
import {Text} from "../shared/style/Text";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Recipes = () => {
    const Data = useContext(LoadItems);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (recipe) => {
        DeleteRecipe(recipe, 'recipes')
        Data.fetchRecipes();
    }

    const recipeToDelete = (recipe) => (
        <Box>
            <Text inline>{recipe.name}</Text>
            <Button rightAligned onClick={handleClickOpen}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do you want to delete this recipe?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => {
                        handleClose()
                        handleDelete(recipe)
                    }}>
                        Yes
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )

    const DrawerContent = [
        <Box mx={1} width="350px">
            <Box pt="40px">
                <AddRecipe/>
            </Box>
            <Box pt="40px">
                {Data.recipes.map(recipe => recipeToDelete(recipe))}
            </Box>
        </Box>
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