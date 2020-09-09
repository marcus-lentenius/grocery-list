import React from "react";
import {Button} from "./shared/style/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import Icon from "@material-ui/core/Icon";


const Drawer = ({anchor, content, disableClickToClose, position}) => {
    const [state, setState] = React.useState({
        left: false,
        right: true,
    });

    const toggleDrawer = (anchor, open, disableClick) => (event) => {
        if (!disableClick) {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            setState({...state, [anchor]: open});
        }
    };

    const Content = (anchor) => (
            <div
                role="presentation"
                onClick={toggleDrawer(anchor, false, disableClickToClose)}
                onKeyDown={toggleDrawer(anchor, false, disableClickToClose)}
                style={position}
            >
                    {content}
            </div>
    );

    const appBar = {
        zIndex: 1299,
        height: "40px",
        boxShadow: "none",
        padding: "8px",
        position: "fixed",
        backgroundColor: "#f4f4f4",
    }

    return (
        <React.Fragment key={anchor}>
            {anchor === 'left' ?
                <Button leftDrawer onClick={toggleDrawer(anchor, true)}>
                    <Icon>
                        menu
                    </Icon>
                </Button>
                : null
            }
            {anchor === 'right' ?
                <Button rightDrawer onClick={toggleDrawer(anchor, true)}>
                    <Icon>
                        menu
                    </Icon>
                </Button> : null}
            <AppBar position="fixed" style={appBar}/>
            <SwipeableDrawer
                hysteresis={0.10}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                disableAutoFocus={true}
                disableDiscovery={true}
            >
                {Content(anchor)}
            </SwipeableDrawer>
        </React.Fragment>
    );
}

export default Drawer