import React, {useContext} from "react";
import AppData from "./App";
import NewItemOptions from "./NewItemOptions";
import {Create, Delete, SetCategoryOnItem} from "../scripts/firebaseCRUD";
import {ListRow} from "./style/ListRow";
import {Button, CustomButton} from "./style/Button";
import {caseString} from "../scripts/FormatText";

const NewItems = () => {
    const Data = useContext(AppData);

    return (
        <>
            {
                Data.new_items.map(item => {
                    return (
                        <form key={'new_items_form_' + item} onChange={e => {
                            console.log(e.target.value)
                            SetCategoryOnItem(item, e.target.value)
                            Delete(item, 'new_items');
                            Data.updateData()
                        }}>
                            <ListRow>
                                {caseString(item)}
                                <NewItemOptions key={'new_items_new_items_options_' + item}/>
                                <CustomButton DeleteNewItem onClick={(e) => {
                                    //todo stop prop?
                                    e.stopPropagation();
                                    e.preventDefault();
                                    Delete(item, 'new_items');
                                    Data.updateData();
                                }}>Delete</CustomButton>
                            </ListRow>
                        </form>
                    );
                })
            }
        </>
    )
}

export default NewItems