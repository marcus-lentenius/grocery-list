import styled from '@emotion/styled'

const decreaseAmount = `
border-right: 0;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
    `
const increaseAmount = `
border-left: 0;
border-top-left-radius: 0;
border-bottom-left-radius: 0;
    `


const base = `
    font: 400 13.3333px Arial;
    cursor: pointer;
    margin: 0;
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
    color: rgba(0,0,0,0.87);
    box-sizing: border-box;
    letter-spacing: 0.02857em;
    padding: 4px 10px;
    border-radius: 10px;
    border: 1px solid black;
    height: 32px;
`

const leftDrawer = `
    border-right: 1px solid gray;
    left: 0;
`
const rightDrawer = `
    border-left: 1px solid gray;
    right: 0;
`

const drawer = `
    padding: 0 6px;
    z-index: 1300;
    width: fit-content;
    color: black;
    font-size: 18px;
    display: inline-block;
    position: fixed;
    top: 7px;
`
export const Button = styled.div`
${props =>
    props.decreaseAmount ? decreaseAmount + base :
    props.increaseAmount ? increaseAmount + base :
    props.leftDrawer ? leftDrawer + drawer :
    props.rightDrawer ? rightDrawer + drawer :
    props ? base : null
}
`