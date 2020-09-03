import styled from "@emotion/styled";

const recipe = `
top: 15%;
background: white;
border: 1px #ababab solid;
border-radius: .25rem;
z-index: 991;
padding: 30px 0;
    position: fixed;
`

const stretch = `
    flex-grow: 1;
`
const addItem = `
display: flex;
justify-content: flex-end;
position: fixed;
bottom: 10px;
width: calc(100% - 50px);
`

const main = `
padding: 0 10px 0 40px;
margin-bottom: 85px;
`

export const Wrapper = styled.div`
    
    ${props =>
    props.main ? main : '' ||
    props.addItem ? addItem : '' ||
    props.stretch ? stretch : '' ||
    props.recipe ? recipe : ''}
`
