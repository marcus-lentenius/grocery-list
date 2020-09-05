import React, {useContext, useState} from "react";
import Item from "./Item";
import {Text} from "../shared/style/Text";
import {getId} from "../../scripts/idGenerator";
import {LoadItems} from "../shared/DataLoader";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";

/**
 * Groups all items under respective category and function for hiding/showing each category
 */

const Category = ({category}) => {
    const Data = useContext(LoadItems);
    const [showList, setShowList] = useState(true)

    const handleClick = () => {
        showList ? setShowList(false) : setShowList(true)
    }

    const List = () => (
        <>
            {
                Data.items.filter(item => item.category === category).map(item => (
                        <Item key={'category_' + item.name + getId()} item={item}/>
                    )
                )
            }
        </>
    )

    return (
        <>
            {category !== '' ? (
                <Text categoryHeadline onClick={() => handleClick()}>
                    {category}
                </Text>
            ) : (
                <Text categoryHeadline onClick={() => handleClick()}>
                    Okänd
                </Text>
            )}
            {showList ? <List/> : null}
        </>
    )
}

export default Category