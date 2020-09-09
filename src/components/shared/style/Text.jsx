import styled from "@emotion/styled";

//todo move width style to wrapper?

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

const inline = `
display: inline-block;
height: 40px;

    font-size: 22px;
    position: relative;
`

const checkBoxContent = `
font-size: 27px;
line-height: 0;
margin: 11px 0 0px 2px;
`

const history = `
    color: rgba(0, 0, 0, 0.42);
    margin: 8px 0;
    font-family: Arial,serif;
    font-size: 17px;
`
const historyDate = `
    color: rgba(0,0,0,0.42);
    margin-top: 20px;
    letter-spacing: 4px;
    line-height: 33px;
    border-bottom: 1px solid rgba(0,0,0,0.42);
    font-size: 19px;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
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
    props.groceryListHeadline ? groceryListHeadline : '' ||
    props.inline ? inline : '' ||
    props.history ? history : '' ||
    props.historyDate ? historyDate : '' ||
    props.checkBoxContent ? checkBoxContent : ''
};
`