import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Text from "./style/Text";
//todo move out of shared

const LoadingScreen = () => {
    return (
        <Grid container style={{height: "100vh"}}>
            <Grid container justify={"center"} alignItems={"flex-end"}>
                <CircularProgress size={100} color="primary"/>
            </Grid>
            <Grid container justify={"center"}>
                <Text groceryListHeadline>Loading</Text>
            </Grid>
        </Grid>
    )
}

export default LoadingScreen