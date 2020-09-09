import styled from "@emotion/styled";

const addItem = `
    background-color: #ffffff;
    color: #858585;
    border-radius: 10px;
    border: 1px solid #ababab;
    height: 30px;
    padding: 0 15px;
width: calc(100% - 30px);
`
//todo top: -.7??
const addAmount = ` 
    position: relative;
    // top: -0.7px;
    width: 25px;
    box-sizing:border-box;
    background-color: #ffffff;
    color: #858585;
    border: 1px solid #ababab;
    height: 32px;
    text-align: center;
    padding: 0 3px;
`
const recipeName = `
width: calc(100% - 30px);
    background-color: #ffffff;
    color: #858585;
    border-radius: 10px;
    border: 1px solid #ababab;
    height: 30px;
    padding: 0 15px;
`
const ingredient = `
width: calc(100% - 30px);
    background-color: #ffffff;
    color: #858585;
    border-radius: 10px;
    border: 1px solid #ababab;
    height: 30px;
    padding: 0 15px;
`
const ingredientAmount = `
    width: 40px;
    background-color: #ffffff;
    color: #858585;
    border-radius: 10px;
    border: 1px solid #ababab;
    height: 30px;
    padding: 0 15px;
`
//todo make base obj
export const Input = styled.input`
    ${props =>
    props.addItem ? addItem : '' ||
    props.addAmount ? addAmount : '' ||
    props.recipeName ? recipeName : '' ||
    props.ingredient ? ingredient : '' ||
    props.ingredientAmount ? ingredientAmount : ''}
`