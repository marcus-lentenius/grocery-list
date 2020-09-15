import React, {useEffect, useState} from "react";
import {Button} from "./index";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import Icon from "@material-ui/core/Icon";


const Drawer = ({children, anchor, disableClickToClose, position}) => {
    const [style, setStyle] = useState({})
    const [state, setState] = useState({
        left: false,
        right: true,
    });

    useEffect(()=>{
        if (position === 'bottom') {
            setStyle({
                height: "100vh",
                position: "relative",
                display: "flex",
                verticalAlign: "bottom",
                alignItems: "flex-end"
            })
        }
    },[position])

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
            style={style}
        >
            {children}
        </div>
    );

    const appBar = {
        zIndex: 1299,
        height: "40px",
        boxShadow: "none",
        padding: "8px",
        position: "fixed",
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
            <AppBar color={"secondary"} position="fixed" style={appBar}/>
            <SwipeableDrawer
                hysteresis={0.05}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                disableAutoFocus={true}
                disableDiscovery={true}
                disableBackdropTransition={true}
                minFlingVelocity={250}
                swipeAreaWidth={40}
            >
                {Content(anchor)}
            </SwipeableDrawer>
        </React.Fragment>
    );
}

export default Drawer