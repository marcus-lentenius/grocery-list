import React, {useContext, useState} from "react";

import Item from "./Item";
import {ContextData, Text} from "../shared";
import {getId} from "../../scripts";

/**
 * Groups all items under respective category and function for hiding/showing each category
 */

const Category = ({category}) => {
    const Data = useContext(ContextData);
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