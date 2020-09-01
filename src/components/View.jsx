import React, {useContext} from 'react'
import AddRecipe from './recipes/AddRecipe'
import {Center} from './shared/style/Center'
import RecipeButtons from "./recipes/RecipeButton";
import AddItem from "./list/AddItem";
import List from "./list/List";
import {Button} from "./shared/style/Button";
import NewItems from "./newItems/NewItems";
import {LoadItems} from "./shared/DataLoader";


const View = () => {
    const Data = useContext(LoadItems);

    return (
        <>
            <Center>
                <AddItem/>
                <List/>
                <Button onClick={() => {
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