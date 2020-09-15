import Box from "@material-ui/core/Box";
import React, {useEffect, useState} from "react";
import Button from "./shared/style/Button";
import {fireBase, provider} from "../scripts/firebase";
import Grid from "@material-ui/core/Grid";
import LoadingScreen from "./shared/LoadingScreen";

const logIn = () => {
    window.location.hash = "redirecting"
    fireBase.auth().signInWithRedirect(provider);
}

// Boolean used in reversed logic to prevent flashing of the button
//todo explore prettier solutions
const LogIn = () => {
    const [notRedirected, setNotRedirected] = useState(true);

    useEffect(() => {
        if (window.location.hash !== "#redirecting") {
            setNotRedirected(false);
        } else {
            window.location.hash = ""
        }
    }, [notRedirected])

    return (
        <Box>
            {notRedirected ?
                <LoadingScreen loadingMessage={"Logging in"}/>
                :
                <Grid container justify={"center"} alignItems={"flex-end"} style={{height: "60vh"}} >
                    <Button onClick={logIn}>Log in with Google</Button>
                </Grid>
            }
        </Box>
    );
};

export default LogIn