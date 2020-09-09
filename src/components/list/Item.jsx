import React, {useContext} from "react";
import {CheckBox} from "../shared/style/CheckBox";
import {Row} from "../shared/style/Row";
import {CreateHistoryItem, Delete} from "../../scripts/firebaseCRUD";
import {Text} from "../shared/style/Text";
import {LoadItems} from "../shared/DataLoader";

const Item = ({item}) => {
    const Data = useContext(LoadItems);

    return (
        <Row groceryList>
            <Text item>
                {item.amount === 1 ? null : item.amount} {item.name}
            </Text>
            <CheckBox onClick={() => {
                CreateHistoryItem(item)
                Delete(item, 'items');
                Data.fetchItems();
                Data.fetchHistory();
            }}/>
        </Row>
    )
}

export default Item;