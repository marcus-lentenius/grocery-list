import React, {useContext} from 'react'
import AppData from './App'
import AddRecipe from './recipes/AddRecipe'
import {Center} from './style/Center'
import RecipeButtons from "./recipes/RecipeButton";
import AddItem from "./AddItem";
import List from "./List";
import {Button} from "./style/Button";
import NewItems from "./NewItems";

const View = () => {
    const Data = useContext(AppData)

    return (
        <>
            <Center>
                <AddItem/>
                <List/>
                <Button onClick={async () => {
                    Data.importFromTodoist()
                }
                }>
                    Import from Todoist
                </Button>
                <NewItems/>
            </Center>
            <Center>
                <AddRecipe/>
            </Center>
            <RecipeButtons/>
        </>
    )
}

export default View