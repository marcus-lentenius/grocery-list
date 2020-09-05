import styled from "@emotion/styled";
const item = `
    font-size: 22px;
`
const categoryHeadline = `
    cursor: pointer;
    position: relative;
    margin: 15px 0 5px 0;
    font-size: 30px;
`
const ingredient = `
width: 100%;
`
const recipeHeadline = `
font-size: 25px;
`
const groceryListHeadline = `
font-size: 25px;
text-align: center;
margin: 20px;
`
const routerLink = `
color: black;
font-size: 25px;
text-decoration: none;
text-align: right;
white-space: nowrap;
margin-left: 30px;
margin-right: 10px;
`

export const Text = styled.p`
margin: 0;
font-size: 14px;
font-family: Arial,serif;

${props =>
    props.item ? item : '' ||
    props.categoryHeadline ? categoryHeadline : '' ||
    props.ingredient ? ingredient : '' ||
    props.recipeHeadline ? recipeHeadline : '' ||
    props.routerLink ? routerLink : '' ||
    props.groceryListHeadline ? groceryListHeadline :  ''
};
`