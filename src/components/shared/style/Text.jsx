import styled from "@emotion/styled";
const item = `
    top: 14px;
    margin: 0 0 0 22px;
    font-size: 14px;
`
const categoryHeadline = `
    cursor: pointer;
    position: relative;
    margin: 15px 0 5px 0;
    font-size: 16px;
`
const ingredient = `
width: 360px;
`
const recipeHeadline = `
font-size: 25px;
text-align: center;
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
const menuSymbol = `
margin-bottom: 70px;
font-size: 25px;
text-align: right;
margin: 10px
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
    props.groceryListHeadline ? groceryListHeadline :  '' ||
    props.menuSymbol ? menuSymbol : ''
};
`