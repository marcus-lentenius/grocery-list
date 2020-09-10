import React from 'react';
import ReactDOM from 'react-dom';
import List from "./components/list/List";
import {BrowserRouter, Route} from "react-router-dom";
import NewItems from "./components/newItems/NewItems";
import {Loader} from "./components/shared/DataLoader";
import {App} from "./components/App";
import Recipes from "./components/recipes/Recipes";
import Container from "@material-ui/core/Container";

//todo mat ui own props
const Routing = (
    <Loader>
        <BrowserRouter>
            <Container style={{top: "50px", position: "relative"}}>
                <Route path="/" component={App}/>
                <Route exact path="/list" component={List}/>
                <Route exact path="/recipes" component={Recipes}/>
                <Route exact path="/newItems" component={NewItems}/>
            </Container>
        </BrowserRouter>
    </Loader>
)

ReactDOM.render(
    Routing,
    document.getElementById('root')
);