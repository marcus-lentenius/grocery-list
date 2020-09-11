import {token} from "./todoistToken";

const $ = require( "jquery" );

const apiUrl = 'https://api.todoist.com/sync/v8/sync';

/** Connection to a grocery list in Todoist
 *  Imports items from that list and adds it to this list
 *
 * @returns {Promise<[]>} Returns array of items from Todoist
 */

async function readFromTodoist() {
    const items = []
    const resourceType = 'items';

    let data = {
        "token": token,
        'resource_types': '["' + resourceType + '"]'
    };

    await $.ajax({
        url: apiUrl,
        data: data,
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            response.items.forEach(item => {
                if (item.project_id === 2228491362) {
                    items.push(item);
                }
            })
        }
    });

    return items;
}

export default readFromTodoist