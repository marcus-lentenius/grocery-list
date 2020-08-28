import React, {useContext, useState} from "react";
import AppData from "./App";
import Item from "./Item";
import {CategoryHeadline} from "./style/CategoryHeadline";

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
                        //todo >item.name<
                        <Item key={'category_' + item.name + Math.random()} item={item}/>
                    )
                )
            }
        </>
    )
    return (
        <>
            {category !== '' ? (
                <CategoryHeadline onClick={()=>handleClick()}>
                    {category}
                </CategoryHeadline>
            ) : (
                <CategoryHeadline onClick={()=>handleClick()}>
                    Okänd
                </CategoryHeadline>
            )}
            { showList ? <List/> : null }
        </>
    )
}

export default Category