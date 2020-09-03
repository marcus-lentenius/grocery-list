import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import List from "./components/list/List";
import {BrowserRouter, Route} from "react-router-dom";
import AddRecipe from "./components/recipes/AddRecipe";
import NewItems from "./components/newItems/NewItems";
import {Loader} from "./components/shared/DataLoader";
import {App} from "./components/App";
import {Wrapper} from "./components/shared/style/Wrapper";
import Recipes from "./components/recipes/Recipes";

const routing = (
    <Loader>
        <BrowserRouter>
            <div>
                <Route path="/" component={App}/>
                <Route exact path="/list" component={List}/>
                <Route exact path="/recipes" component={Recipes}/>
                <Route exact path="/newItems" component={NewItems}/>
            </div>
        </BrowserRouter>
    </Loader>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
);