import React, {useContext} from "react";
import AddItem from "./AddItem";
import {Button} from "../shared/style/Button";
import {Wrapper} from "../shared/style/Wrapper";
import Category from "./Category";
import {LoadItems} from "../shared/DataLoader";
import {caseString} from "../../scripts/formatText";
import {Text} from "../shared/style/Text";


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
        <Wrapper main>
            <Text groceryListHeadline>
                Grocery list
            </Text>
            {
                category.map(category => (
                    <Category key={'list_' + category} category={category}/>
                ))
            }

            <Button rightAligned onClick={() => {
                Data.importFromTodoist()
            }
            }>
                Import from Todoist
            </Button>
            <AddItem/>
        </Wrapper>
    );
}

export default List;