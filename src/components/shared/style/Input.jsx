import styled from "@emotion/styled";

const base = `
    background-color: #ffffff;
    border: 1px solid #ababab;
    color: #858585;
    height: 30px;
    border-radius: 10px;
    padding: 0 15px;
    width: calc(100% - 30px);
`
const addAmount = ` 
    position: relative;
    width: 25px;
    box-sizing:border-box;
    height: 32px;
    text-align: center;
    padding: 0 3px;
`
const ingredientAmount = `
    width: 40px;
`
const Input = styled.input`
${props =>
props.ingredientAmount ? base + ingredientAmount :
props.addAmount ? addAmount :
props ? base : null
}
`

export default Input