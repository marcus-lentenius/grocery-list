import React, {useContext} from 'react'
import AddRecipe from './recipes/AddRecipe'
import {Wrapper} from './shared/style/Wrapper'
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
            <Wrapper>
                <AddItem/>
                <List/>
                <Button onClick={() => {
                    Data.importFromTodoist()
                }
                }>
                    Import from Todoist
                </Button>
                <NewItems/>
            </Wrapper>
            <Wrapper>
                <AddRecipe/>
            </Wrapper>
            <RecipeButtons/>
        </>
    )
}

export default View