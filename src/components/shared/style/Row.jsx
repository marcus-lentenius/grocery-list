import styled from "@emotion/styled";

const groceryList = `
    position: relative;
    border-bottom: 1px solid #efeded;
    display: flex;
        margin-top: 10px;
        text-align: right;
`
const recipeIngredient = `
    width: 300px;
    align-items: center;
    position: relative;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
`


export const Row = styled.div`
    width: 100%;
    height: 32px;
${props =>
    props.groceryList ? groceryList : '' ||
    props.recipeIngredient ? recipeIngredient : ''};
`