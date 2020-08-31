import React, {useContext} from "react";
import AppData from "./App";
import NewItemOptions from "./NewItemOptions";
import {Delete, SetCategoryOnItem} from "../scripts/firebaseCRUD";
import {Row} from "./style/Row";
import {Button} from "./style/Button";
import {caseString} from "../scripts/FormatText";
import {Text} from "./style/Text";

/**
 *  Iterates a list of items that does not exist in the reference list document (in firebase)
 *  Adds them to a document for new items (in firebase)
 *  Rendering a list of the items with the option of adding the item to a category in the reference list document (in firebase)
 */

// todo add uppdate item

const NewItems = () => {
    const Data = useContext(AppData);
    return (
        <>
            {
                Data.new_items.map(item => {
                    return (

                        //todo refactor till ref

                        <form key={'new_items_form_' + item} onChange={e => {
                            console.log(e.target.value)
                            SetCategoryOnItem(item, e.target.value)
                            Delete(item, 'new_items');
                            Data.updateData()
                        }}>
                            <Row>
                                <Text newItem>
                                    {caseString(item)}
                                </Text>
                                <NewItemOptions key={'new_items_new_items_options_' + item}/>
                                <Button rightAligned onClick={(e) => {
                                    //todo stop prop?
                                    e.stopPropagation();
                                    e.preventDefault();
                                    Delete(item, 'new_items');
                                    Data.updateData();
                                }}>
                                    Delete
                                </Button>
                            </Row>
                        </form>
                    );
                })
            }
        </>
    )
}

export default NewItems