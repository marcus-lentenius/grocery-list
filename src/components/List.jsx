import React, {useContext, useEffect, useState} from "react";
import {caseString} from "../scripts/FormatText";
import AppData from "./App";
import Category from "./Category";


const List = () => {
    const Data = useContext(AppData)
    const [isLoading, setIsLoading] = useState(true)
    const [sortingOrder, setSortingOrder] = useState(undefined)
    const [category, setCategory] = useState([])
    const [showList, setShowList] = useState(false)

    useEffect(()=>{
        if (Data.items.length !== 0 && Data.sorting_order.length !== 0 && isLoading) {
            setIsLoading(false);
        }

        if (!isLoading) {
            setSortingOrder(Data.sorting_order.map(category => caseString(category)))

            let newCategory = [...new Set(Data.items.map(item => item.category))];

            if (sortingOrder) {
                newCategory.sort(function (a, b) {
                    return sortingOrder.indexOf(a) - sortingOrder.indexOf(b);
                });
            }

            setCategory(newCategory)
            //todo fixa till..
            if (category.length !== 0) {
                setShowList(true)
            }
        }
    },[isLoading, Data])

    const List = () => (
        <>
            {
                category.map(category => (
                    <Category key={'list_' + category} category={category}/>
                ))
            }
        </>
    )

    return (
        <>
            {showList ? <List/> : null}
        </>
    );
}

export default List;