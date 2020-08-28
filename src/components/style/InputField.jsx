import styled from "@emotion/styled";

const addRecipe = `

`

export const InputField = styled.input`
${props =>
    props.addRecipe ? '' : null
};
display: block;
`
