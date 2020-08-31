import React, {useContext} from "react";
import AppData from "../App";
import NewItemOptions from "./NewItemOptions";
import {Delete, AddItemToReferenceList, Create} from "../../scripts/firebaseCRUD";
import {Row} from "../shared/style/Row";
import {Button} from "../shared/style/Button";
import {caseString} from "../../scripts/formatText";
import {Text} from "../shared/style/Text";
import {CategorizeItem} from "../../scripts/categorizeItems";

/**
 *  Iterates a list of items that does not exist in the reference list document (in firebase)
 *  Adds them to a document for new items (in firebase)
 *  Rendering a list of the items with the option of adding the item to a category in the reference list document (in firebase)
 */

const NewItems = () => {
    const Data = useContext(AppData);

    const handleUpdate = (e, item) => {
        AddItemToReferenceList(item, e.target.value)
        Delete(item, 'new_items');
        Data.updateData()
    }

    return (
        <>
            {
                Data.new_items.map(item => {
                    return (

                        //todo refactor till ref ?

                        <form key={'new_items_form_' + item} onChange={e => handleUpdate(e, item)}>
                            <Row>
                                <Text newItem>
                                    {caseString(item)}
                                </Text>
                                <NewItemOptions key={'new_items_new_items_options_' + item}/>
                                <Button rightAligned onClick={(e) => {
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