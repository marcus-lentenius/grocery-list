import React from "react";
import {Row} from "../shared/style/Row";
import {Input} from "../shared/style/Input";
import {Button} from "../shared/style/Button";

const AddIngredient = ({ingredientRef,amountRef,handleAddIngredient}) => (
    <Row>
        <Input ingredient ref={ingredientRef} id={"ingredient"} placeholder={"Ingredient"}
               onKeyPress={e => {
                   if (e.key === 'Enter') {
                       handleAddIngredient()
                   }
               }}/>
        <Input ingredientAmount ref={amountRef} id={"amount"} placeholder={"Antal"}
               onKeyPress={e => {
                   if (e.key === 'Enter') {
                       handleAddIngredient()
                   }
               }}/>
        <Button onClick={e => {
            handleAddIngredient();
        }}>
            Add
        </Button>
    </Row>
)

export default AddIngredient;