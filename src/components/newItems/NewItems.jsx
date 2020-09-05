import React, {useContext} from "react";
import NewItemOptions from "./NewItemOptions";
import {AddItemToReferenceList, Delete} from "../../scripts/firebaseCRUD";
import {caseString} from "../../scripts/formatText";
import {Text} from "../shared/style/Text";
import {LoadItems} from "../shared/DataLoader";
import Grid from "@material-ui/core/Grid";
import {Button} from "../shared/style/Button";

/**
 *  Iterates a list of items that does not exist in the reference list document (in firebase)
 *  Adds them to a document for new items (in firebase)
 *  Rendering a list of the items with the option of adding the item to a category in the reference list document (in firebase)
 */

const NewItems = () => {
    const Data = useContext(LoadItems);

    const handleUpdate = (e, item) => {
        AddItemToReferenceList(item, e.target.value)
        Delete(item, 'new_items');
        Data.updateData('newItems')
    }

    return (
        <>
            {
                Data.new_items.map(item => {
                    return (

                        //todo refactor till ref ?

                        <form key={'new_items_form_' + item} onChange={e => handleUpdate(e, item)}>
                            <Grid container>

                                <Grid item xs>
                                    <Text newItem>
                                        {caseString(item)}
                                    </Text>
                                </Grid>
                                <Grid item>
                                    <NewItemOptions key={'new_items_new_items_options_' + item}/>
                                    <Button variant={"contained"} disableElevation size="small"  onClick={(e) => {
                                        e.preventDefault();
                                        Delete(item, 'new_items');
                                        Data.updateData('newItems');
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