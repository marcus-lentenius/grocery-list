import React from "react";

import Grid from "@material-ui/core/Grid";

import {Button, Input} from "../shared";

const AddIngredient = ({ingredientRef, amountRef, handleAddIngredient}) => (
    <>
        <Grid container spacing={1}>
            <Grid item xs>
                <Input autoComplete="off"
                       ref={ingredientRef}
                       id={"ingredient"}
                       placeholder={"Ingredient"}
                       onKeyPress={e => {
                           if (e.key === 'Enter') {
                               handleAddIngredient()
                           }
                       }}/>
            </Grid>
            <Grid item>
                <Input ingredientAmount
                       autoComplete="off"
                       ref={amountRef}
                       id={"amount"}
                       placeholder={"Antal"}
                       onKeyPress={e => {
                           if (e.key === 'Enter') {
                               handleAddIngredient()
                           }
                       }}/>
            </Grid>
            <Grid item>
                <Button onClick={e => {
                    handleAddIngredient();
                }}>
                    Add
                </Button>
            </Grid>
        </Grid>
    </>
)

export default AddIngredient;