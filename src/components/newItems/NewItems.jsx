import React, {useContext} from "react";

import Grid from "@material-ui/core/Grid";

import {NewItemOptions} from "./";
import {addItemToReferenceList, remove} from "../../scripts";
import {Button, ContextData, Text} from "../shared";

/**
 *  Iterates a list of items that does not exist in the reference list document (in firebase)
 *  Adds them to a document for new items (in firebase)
 *  Rendering a list of the items with the option of adding the item to a category in the reference list document (in firebase)
 */

const NewItems = () => {
    const Data = useContext(ContextData);

    const handleUpdate = (e, item) => {
        addItemToReferenceList(item, e.target.value.toLowerCase())
        remove(item, 'new_items');
        Data.updateData('newItems')
    }

    return (
        <>
            {
                Data.new_items.map(item => {
                    return (
                        <form key={'new_items_form_' + item} onChange={e => handleUpdate(e, item)}>
                            <Grid container>
                                <Grid item xs>
                                    <Text newItem>
                                        {item}
                                    </Text>
                                </Grid>
                                <Grid item>
                                    <NewItemOptions key={'new_items_new_items_options_' + item}/>
                                    <Button variant={"contained"} disableElevation size="small" onClick={(e) => {
                                        e.preventDefault();
                                        remove(item, 'new_items');
                                        Data.updateData('newItems')
                                        Data.updateData('referenceList')
                                        // Data.fetchNewItems();
                                        // Data.fetchReferenceList();
                                    }}>
                                        Delete
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    );
                })
            }
        </>
    )
}

export default NewItems