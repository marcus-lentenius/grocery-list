import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

import Container from "@material-ui/core/Container";

import {App} from "./components/App";
import {Recipes} from "./components/recipes";
import {List} from "./components/list"
import {NewItems} from "./components/newItems";
import {Loader} from "./components/shared";

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