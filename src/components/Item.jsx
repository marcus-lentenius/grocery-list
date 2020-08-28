import React, {useContext} from "react";
import {CheckBox} from "./style/CheckBox";
import {ListItem} from "./style/ListItem";
import {ListRow} from "./style/ListRow";
import {Delete} from "../scripts/firebaseCRUD";
import AppData from "./App";

const Item = ({item}) => {
    const Data = useContext(AppData)

    return (
        <ListRow>
            <CheckBox onClick={() => {
                //todo async byta item till id?
                Delete(item, 'items')
                Data.fetchItems()
            }}/>
            <ListItem>{item.amount === 1 ? null : item.amount + ' '}{item.name}</ListItem>
        </ListRow>
    )
}

export default Item;