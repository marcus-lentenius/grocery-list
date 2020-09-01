import React, {useContext} from "react";
import {caseString} from "../../scripts/formatText";
import Category from "./Category";
import {LoadItems} from "../shared/DataLoader";


const List = () => {
    const Data = useContext(LoadItems);

    const sortingOrder = Data.sorting_order.map(category => caseString(category))
    let category = [...new Set(Data.items.map(item => item.category))];

    if (sortingOrder) {
        category.sort(function (a, b) {
            return sortingOrder.indexOf(a) - sortingOrder.indexOf(b);
        });
    }

    return (
        <>
            {
                category.map(category => (
                    <Category key={'list_' + category} category={category}/>
                ))
            }
        </>
    );
}

export default List;