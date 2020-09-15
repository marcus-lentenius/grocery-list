import React, {useContext} from "react";

import {caseString} from "../../scripts";
import {Select} from "./";
import {ContextData} from "../shared";

/**
 * Renders a select list with the names on the categories
 */

const NewItemOptions = () => {
    const Data = useContext(ContextData);

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