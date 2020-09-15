import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";

import Container from "@material-ui/core/Container";
import {Recipes} from "./components/recipes";
import {List} from "./components/list"
import {NewItems} from "./components/newItems";
import {Loader} from "./components/shared";
import {fireBase} from "./scripts";
import {Menu} from "./components/";
import {LogIn} from "./components/";

// todo mat ui own props
const App = () => {
    const [isAuthenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        fireBase.auth().getRedirectResult().then(function (result) {
            if (result.user) {
                setAuthenticated(true)
            } else if (fireBase.auth().currentUser) {
                setAuthenticated(true)
            } else {
                setAuthenticated(false)
            }
        });
    }, [isAuthenticated])

    return (
        <Container style={{top: "50px", position: "relative"}}>
            {isAuthenticated ?
                <BrowserRouter>
                    <Loader>
                        <Route path="/" component={Menu}/>
                        <Route path="/list" component={List}/>
                        <Route path="/recipes" component={Recipes}/>
                        <Route path="/newItems" component={NewItems}/>
                    </Loader>
                </BrowserRouter>
                :
                <LogIn/>
            }
        </Container>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);