import React, {useContext} from "react";
import {caseString} from "../../scripts/formatText";
import {Select} from "./style/Select";
import {LoadItems} from "../shared/DataLoader";

/**
 * Renders a select list with the names on the categories
 */

const NewItemOptions = () => {
    const Data = useContext(LoadItems);

    const referenceList = Object.keys(Data.reference_list);
    referenceList.sort()

    return (
        <Select>
            <option>Kategori</option>
            {
                referenceList.map(category =>
                    <option key={'new_items_options_' + category}>{caseString(category)}</option>
                )
            }
        </Select>
    );
}

export default NewItemOptions