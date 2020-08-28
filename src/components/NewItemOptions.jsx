import React, {useContext} from "react";
import AppData from "./App";
import {caseString} from "../scripts/FormatText";
import {Select} from "./style/Select";

const NewItemOptions = () => {
    const Data = useContext(AppData);
    return (
        <Select>
            <option>Kategori</option>
            {
                Object.keys(Data.reference_list).map(category =>
                    <option key={'new_items_options_' + category}>{caseString(category)}</option>
                )
            }
        </Select>
    );
}

export default NewItemOptions