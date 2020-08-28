import React, {useContext} from "react";
import List from "./List";
import AddItem from "./AddItem";
import {ListWrapper} from "./style/ListWrapper";
import {Button} from "./style/Button";
import AppData from "./App";
import NewItems from "./NewItems";
import AddRecipe from "./recipes/AddRecipe";



const View = () => {
    const Data = useContext(AppData)

    const FullView =(
        <>
        <ListWrapper>
            <AddItem/>
            <List/>
        </ListWrapper>
    <Button onClick={async () => {
        Data.importFromTodoist()
    }}>import</Button>
    <NewItems/>
    </>
    )

    return (
        <>
            <AddRecipe/>
        </>
    );
};

export default View;