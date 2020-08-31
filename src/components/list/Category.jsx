import React, {useContext, useState} from "react";
import AppData from "../App";
import Item from "./Item";
import {Text} from "../shared/style/Text";

/**
 * Groups all items under respective category and function for hiding/showing each category
 */

const Category = ({category}) => {
    const Data = useContext(AppData)
    const [showList, setShowList] = useState(true)

    const handleClick = () => {
        showList ? setShowList(false) : setShowList(true)
    }

    const List = () => (
        <>
            {
                Data.items.filter(item => item.category === category).map(item => (
                        //todo <>item.name<> ?
                        <Item key={'category_' + item.name + Math.random()} item={item}/>
                    )
                )
            }
        </>
    )
    return (
        <>
            {category !== '' ? (
                <Text headline onClick={()=>handleClick()}>
                    {category}
                </Text>
            ) : (
                <Text headline onClick={()=>handleClick()}>
                    Okänd
                </Text>
            )}
            { showList ? <List/> : null }
        </>
    )
}

export default Category