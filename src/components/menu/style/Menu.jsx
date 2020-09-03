import styled from "@emotion/styled";


const openBackground = `
z-index: 999;
background: white;
border-right: solid 1px #7b7979;
position: absolute;
height: 100vh;
width: 30px;
left: 0;
top: 0;
  transition: width .5s ease;
  overflow:hidden;
  $:hover { width: 50vw;}
`
const collapseBackground = `
z-index: 999;
background: white;
border-right: solid 1px #7b7979;
position: absolute;
height: 100vh;
width: 50vw;
left: 0;
top: 0;
  $:hover { width: 30px;}
  transition: width .5s ease;
  overflow:hidden;
`

export const MenuIconBar = styled.div`
width: 17px;
height: 3px;
background-color: white;
border-radius: 2px;
margin-bottom: 3px;
`
export const MenuIconBackground = styled.div`
    height: 15px;
    width: 17px;
    padding: 3px;
    background-color: #b9b9b9;
    border: 1px #7b7979 solid;
    border-radius: 3px;
    cursor: pointer;
    margin: 3px;
`
export const Menu = styled.div`
${props =>
    props.background ? collapseBackground : openBackground
}
`