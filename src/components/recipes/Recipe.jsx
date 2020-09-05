import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import {Button} from "../shared/style/Button";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Text} from "../shared/style/Text";
import {Row} from "../shared/style/Row";
import {LoadItems} from "../shared/DataLoader";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {caseString} from "../../scripts/formatText";
import {Create, DeleteRecipe} from "../../scripts/firebaseCRUD";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const Recipe = ({recipe}) => {
    const Data = useContext(LoadItems);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // Adds items from the recipe to the grocery list
    const handleOnClick = (name, amount) => {
        const category = CategorizeItem(name, Data.reference_list)
        Create(Data.items, {name: caseString(name), category: category, amount: amount})
        Data.fetchItems()
    };

    const handleDelete = (recipe) => {
        DeleteRecipe(recipe, 'recipes')
        Data.updateData('recipes');
    }

    return (
        <Card variant={"outlined"}>
            <CardHeader
                onClick={handleExpandClick}
                action={
                    <CardActions disableSpacing>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </IconButton>
                    </CardActions>
                }
                title={
                    <Text recipeHeadline>{recipe.name}</Text>
                }
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {
                        recipe.ingredients.map(ingredient => (
                                <Row recipeIngredient>
                                    <Text>{ingredient.amount} {ingredient.name}</Text>
                                    <Button variant={"contained"} disableElevation size="small"  onClick={(e) => {
                                        handleOnClick(ingredient.name, ingredient.amount);
                                        e.target.parentNode.remove()
                                    }}>Add</Button>
                                </Row>
                            )
                        )
                    }

                    <Button variant={"contained"} disableElevation size="small" onClick={handleClickOpen}>
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
                            <Button onClick={handleClose} color="primary">
                                Yes
                            </Button>
                            <Button onClick={handleClose} color="primary" autoFocus>
                                No
                            </Button>
                        </DialogActions>
                    </Dialog>
                </CardContent>
            </Collapse>
        </Card>
    );
}
export default Recipe;