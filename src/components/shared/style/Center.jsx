import styled from "@emotion/styled";

const recipe = `
top: 15%;
width: 600px;
background: white;
border: 1px #ababab solid;
border-radius: .25rem;
z-index: 991;
padding: 30px 0;
    position: fixed;
`

export const Center = styled.div`
    width: 408px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    
    ${props =>
    props.recipe ? recipe : ''}
`
