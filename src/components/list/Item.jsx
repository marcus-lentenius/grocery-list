import React, {useContext} from "react";
import {CheckBox} from "./style/CheckBox";
import {Row} from "../shared/style/Row";
import {Delete} from "../../scripts/firebaseCRUD";
import AppData from "../App";
import {Text} from "../shared/style/Text";

const Item = ({item}) => {
    const Data = useContext(AppData)

    return (
        <Row groceryList>
            <CheckBox onClick={() => {
                Delete(item, 'items')
                Data.fetchItems()
            }}/>
            <Text item>
                {item.amount === 1 ? null : item.amount} {item.name}
            </Text>
        </Row>
    )
}

export default Item;