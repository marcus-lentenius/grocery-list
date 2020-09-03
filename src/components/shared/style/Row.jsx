import styled from "@emotion/styled";

const groceryList = `
    align-items: center;
    height: 32px;
    position: relative;
    border-top: 1px solid #efeded;
    display: flex;
`

const base = `
    width: 300px;
    align-items: center;
    height: 32px;
    position: relative;
    display: flex;
`
const recipeIngredient = `
    width: 300px;
    align-items: center;
    width: 408px;
    height: 32px;
    position: relative;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
`


export const Row = styled.div`
${props =>
    props.groceryList ? groceryList : base ||
    props.recipeIngredient ? recipeIngredient : base};
`