import styled from "@emotion/styled";
//todo generiskt
const item = `
    top: 14px;
    margin: 0 0 0 22px;
    font-size: 14px;
`
const headline = `
    cursor: pointer;
    position: relative;
    width: 408px;
    margin: 15px 0 0 0;
    color: blue;
    font-size: 16px;
    text-align: center;
    border-bottom: 1px solid #ababab;
`
const ingredient = `
width: 360px;
`

const recipeHeadline = `
font-size: 25px;
text-align: center;
`
export const Text = styled.p`
margin: 0;
font-size: 14px;
font-family: Arial,serif;


${props =>
    props.item ? item : '' ||
    props.headline ? headline : ''||
    props.ingredient ? ingredient : ''||
    props.recipeHeadline ? recipeHeadline : ''
};
`