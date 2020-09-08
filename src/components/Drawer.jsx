import React from "react";
import {Button} from "./shared/style/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";


const Drawer = ({anchor, content, disableClickToClose}) => {
    const [state, setState] = React.useState({
        left: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };

    const Content = (anchor) => (
        <>
            {disableClickToClose ?
                <>
                    <List style={{paddingTop: "60px"}}>
                        {content.map((link) => link)}
                    </List>
                    <Divider/>
                </>
                :
                <div
                    role="presentation"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                >
                    <List style={{paddingTop: "60px"}}>
                        {content.map((link) => link)}
                    </List>
                    <Divider/>
                </div>
            }
        </>
    );

    const appBar = {
        zIndex: 1299,
        height: "40px",
        boxShadow: "none",
        padding: "8px",
        position: "fixed",
        backgroundColor: "white",
        borderBottom: "1px solid gray",
    }

    return (
        <React.Fragment key={anchor}>
            {anchor === 'left' ? <Button leftDrawer onClick={toggleDrawer(anchor, true)}>☰</Button> : null}
            {anchor === 'right' ? <Button rightDrawer onClick={toggleDrawer(anchor, true)}>☰</Button> : null}
            <AppBar position="fixed" style={appBar}/>
            <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                disableAutoFocus={true}
                disableDiscovery={true}
            >
                {anchor === 'left' ? <Button leftDrawer onClick={toggleDrawer(anchor, false)}>X</Button> : null}
                {anchor === 'right' ? <Button rightDrawer onClick={toggleDrawer(anchor, false)}>X</Button> : null}
                {Content(anchor)}
            </SwipeableDrawer>
        </React.Fragment>
    );
}

export default Drawer