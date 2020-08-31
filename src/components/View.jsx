import React, {useContext, useState} from 'react'
import AppData from './App'
import AddRecipe from './recipes/AddRecipe'
import {Center} from './shared/style/Center'
import RecipeButtons from "./recipes/RecipeButton";
import AddItem from "./list/AddItem";
import List from "./list/List";
import {Button} from "./shared/style/Button";
import NewItems from "./newItems/NewItems";


export const ContextData = React.createContext(undefined);

const View = () => {
    const Data = useContext(AppData)
    const [data, setData] = useState(undefined);

    // setData(dataLoader());

    return (
        <>
            <ContextData.Provider value={data}>
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
            </ContextData.Provider>
        </>
    )
}

export default View