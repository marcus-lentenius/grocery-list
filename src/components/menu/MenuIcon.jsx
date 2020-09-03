import React from "react";
import {Menu, MenuIconBackground, MenuIconBar} from "./style/Menu";


const MenuIcon = ({onClick})=> (
    <MenuIconBackground onClick={() => onClick()}>
        <MenuIconBar bar/>
        <MenuIconBar bar/>
        <MenuIconBar bar/>
    </MenuIconBackground>
);

export default MenuIcon