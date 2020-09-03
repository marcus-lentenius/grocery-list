import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Text} from "./shared/style/Text";
import {Menu} from "./menu/style/Menu";
import MenuIcon from "./menu/MenuIcon";

//tests
// add item
// add
// amount
// adds newItem
// correct category
//new items
// delete
// categorize
//add recipe
//name
//ingredient & amount
//edit name & amount & apply
// add recipe
//recipes
//open & close(outside & button)
// delete
// add ingredient
//import from todoist
//adds items
//adds "newItems"

//fixme
// stop marking when double click buttons
// order newItem categories
// routing & actions
// confirmation when deleting recipe
// undo categorizing newitems
// add posibility to edit existing recipe?
// caseString() in adding recipe
// clear items in todoist after import
// keep items in recipes after added to list?
// add item suggestions
// external context
// add error mesages
// seperate index export files
// add 404


export const App = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [menuSymbol, setMenuSymbol] = useState('›')

    const handleOnMenuClick = () => {
        if (!showMenu) {
            setShowMenu(true);
            setMenuSymbol('‹')
        } else {
            setShowMenu(false);
            setMenuSymbol('›')
        }
    }

    return (
        <>
            <Menu background={showMenu} onClick={()=>handleOnMenuClick()}>
                <Text menuSymbol>
                    {menuSymbol}
                </Text>
                {/*//todo hide until click*/}
                <Link to="/list" style={{textDecoration: 'none'}}>
                    <Text routerLink>
                        List
                    </Text>
                </Link>

                <Link to="/recipes" style={{textDecoration: 'none'}}>
                    <Text routerLink>
                        Recipes
                    </Text>
                </Link>

                <Link to="/newItems" style={{textDecoration: 'none'}}>
                    <Text routerLink>
                        New items
                    </Text>
                </Link>
            </Menu>
        </>
    )
}