import React, {useContext, useRef, useState} from 'react';
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
import {LoadItems} from "../shared/DataLoader";
import {CategorizeItem} from "../../scripts/categorizeItems";
import {caseString} from "../../scripts/formatText";
import {Create} from "../../scripts/firebaseCRUD";
import Grid from "@material-ui/core/Grid";
import ActionInfoBar from "./ActionInfoBar";

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
    const [expanded, setExpanded] = React.useState(false);

    const classes = useStyles();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

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
                            <ActionInfoBar name={ingredient.name} amount={ingredient.amount}/>
                            )
                        )
                    }
                </CardContent>
            </Collapse>
        </Card>
    );
}
export default Recipe;