import styled from '@emotion/styled'

const increaseAmount = `
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0; 
    `
const decreaseAmount = `
    border-right: 0; 
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
    `
const amountButtons = `
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

const rightAligned = `
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

const recipe = `
height: 100px;
width: 100px;
padding: 0 10px;
margin: 10px;
`

export const Button = styled.div`
    text-align: center;
    background-color:rgb(239, 239, 239);
    box-sizing:border-box;
    display:inline-block;
    height: 32px;
    padding: 4.5px 6px;
    position: relative;
    color: #ababab;
    border: 1px #ababab solid;
    border-radius: .25rem;
    font-weight: 400;
    cursor: pointer;
    font-size: 14px;
    
    ${props =>
    props.increaseAmount ? amountButtons + increaseAmount : '' ||
    props.decreaseAmount ? amountButtons + decreaseAmount : '' ||
    props.rightAligned ? rightAligned : '' ||
    props.recipe ? recipe : ''}
`