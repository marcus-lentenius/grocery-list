import styled from "@emotion/styled";

export const Button = styled.button`
    height: 32px;
    padding: 0 20px;
    position: relative;
    color: #ababab;
    border: 1px #ababab solid;
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
    border-radius: .25rem;
`
//todo samla gemener
const IncreaseAmount = `
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-left: 0; 
    `
const DecreaseAmount = `
    border-right: 0; 
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    `
const AmountButtons = `
    -webkit-user-select: none; /* Chrome/Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+ */
    background-color:rgb(239, 239, 239);
    box-sizing:border-box;
    display:inline-block;
    height: 32px;
    padding: 4.5px 6px;
    position: relative;
    color: #ababab;
    border: 1px #ababab solid;
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
`

const DeleteNewItem = `
    background-color:rgb(239, 239, 239);
    box-sizing:border-box;
    display:inline-block;
    height: 32px;
    padding: 4.5px 6px;
    position: relative;
    color: #ababab;
    border: 1px #ababab solid;
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
    border-radius: .25rem;
    position: absolute;
    right: 0;
`
export const CustomButton = styled.div`
    ${props =>
    props.IncreaseAmount ? AmountButtons + IncreaseAmount : '' ||
    props.DecreaseAmount ? AmountButtons + DecreaseAmount : '' ||
    props.DeleteNewItem ? DeleteNewItem : ''}
`