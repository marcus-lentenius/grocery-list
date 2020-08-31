import React from 'react';
import {fireBase} from "../scripts/firebase";
import {Create, Read} from "../scripts/firebaseCRUD";
import {TodoistRead} from "../scripts/todoistCRUD";
import View from "./View";
import {CategorizeItem} from "../scripts/categorizeItems";
import {caseString} from "../scripts/FormatText";

//todo error message
// fixa mappstruktur
// is this single purpose?

const AppData = React.createContext(undefined)

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            reference_list: [],
            sorting_order: [],
            new_items: [],
            recipes: [],
        };
    }

    componentDidMount() {
        fireBase.auth().signInWithEmailAndPassword('marcus@lentenius.se', 'password')
            .then(success => {
                this.fetch().catch((e) => console.error(e));
            })
            .catch((e) => console.error(e));
    }

    //todo reorder after need
    fetch = async () => {
        console.log('Preload initiated...')
        await this.fetchItems();
        await this.fetchReferenceList();
        await this.fetchSortOrder();
        await this.fetchNewItems()
        await this.fetchRecipes()
        console.log('Preload complete')
    }

    updateData = async () => {
        await this.fetchItems();
        await this.fetchNewItems()
        await this.fetchReferenceList();
    }

    fetchItems = async () => {
        console.log('Fetching items...')
        const response = await Read('items');
        //todo ta bort items[]från firestore?
        this.setState({items: response.items})
        console.log('Items fetched')
    }
    fetchRecipes = async () => {
        console.log('Fetching recipes...')
        const response = await Read('recipes');
        //todo ta bort items[]från firestore?
        this.setState({recipes: response.recipes})
        console.log('Recipes fetched')
    }

    fetchReferenceList = async () => {
        console.log('Fetching Reference list...')
        const response = await Read('reference_list');
        this.setState({reference_list: response})
        console.log('Reference list fetched')
    }

    fetchSortOrder = async () => {
        console.log('Fetching Sorting order...')
        const response = await Read('sorting_order');
        this.setState({sorting_order: response.coop})
        console.log('Sorting order fetched')
    }
    fetchNewItems = async () => {
        console.log('Fetching New items...')
        const response = await Read('new_items');
        this.setState({new_items: response.items})
        console.log('New items fetched')
    }

    //todo refactor
    importFromTodoist = async () => {
        const todoistList = await TodoistRead();
        const arr = todoistList.map(item => {
            return {name: item.content, category: CategorizeItem(item.content, this.state.reference_list)}
        })

        arr.forEach(newItem => {
            let exists = false
            this.state.items.forEach(item => {
                if (item.name === newItem.name) {
                    exists = true
                }
            })

            if (exists === false) {
                Create(this.state.items, {
                    name: caseString(newItem.name),
                    category: newItem.category,
                }).catch((e) => console.error(e));
            }
            exists = false
        })
        await this.updateData()
    }

    render() {
        return (
            <AppData.Provider value={
                {
                    items: this.state.items,
                    reference_list: this.state.reference_list,
                    sorting_order: this.state.sorting_order,
                    new_items: this.state.new_items,
                    recipes: this.state.recipes,
                    fetchItems: this.fetchItems.bind(this),
                    fetchReferenceList: this.fetchReferenceList.bind(this),
                    importFromTodoist: this.importFromTodoist.bind(this),
                    fetchRecipes: this.fetchRecipes.bind(this),
                    updateData: this.updateData.bind(this)
                }
            }>
                <View/>
            </AppData.Provider>
        );
    }
}

export default AppData


//todo används denna?
// outdated

// deleteItem = async (id) => {
//     await TodoistDelete(id)
//     await this.fetchItems();
// }