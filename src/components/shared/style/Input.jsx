import styled from "@emotion/styled";

const addItem = `
    width: 270px;
    background-color: #ffffff;
    color: #858585;
    border-radius: .25rem;
    border: 1px solid #ababab;
    height: 30px;
    padding: 0 15px;
`

const addAmount = ` 
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
    width: 408px;
    background-color: #ffffff;
    color: #858585;
    border-radius: .25rem;
    border: 1px solid #ababab;
    height: 30px;
    padding: 0 15px;
`
const ingredient = `
    width: 408px;
    background-color: #ffffff;
    color: #858585;
    border-radius: .25rem;
    border: 1px solid #ababab;
    height: 30px;
    padding: 0 15px;
`
const ingredientAmount = `
    width: 40px;
    background-color: #ffffff;
    color: #858585;
    border-radius: .25rem;
    border: 1px solid #ababab;
    height: 30px;
    padding: 0 15px;
`

export const Input = styled.input`
    ${props =>
    props.addItem ? addItem : '' ||
    props.addAmount ? addAmount : '' ||
    props.recipeName ? recipeName : '' ||
    props.ingredient ? ingredient : '' ||
    props.ingredientAmount ? ingredientAmount : ''}
`