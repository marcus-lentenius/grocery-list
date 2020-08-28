import styled from "@emotion/styled";

const Item = `
    top: 14px;
    margin: 0 0 0 22px;
    font-size: 14px;
`

export const Text = styled.p`
margin: 0;
font-size: 14px;
font-family: Arial,serif;

${props =>
    props.Item ? Item : ''};
`