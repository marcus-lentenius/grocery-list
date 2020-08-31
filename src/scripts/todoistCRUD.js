const $ = require( "jquery" );

const apiUrl = 'https://api.todoist.com/sync/v8/sync';
const token = "a20db3a3e7de819db9fc1b3878cb2b5d606f0a17";
let syncToken;

/** Connection to a grocery list in Todoist
 *  Imports items from that list and adds it to this list
 *
 * @returns {Promise<[]>} Returns array of items from Todoist
 */

export async function TodoistRead() {
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
            syncToken = response.sync_token;
            response.items.forEach(item => {
                if (item.project_id === 2228491362) {
                    items.push(item);
                }
            })
            // items = response.items;
            //todo flytta ut d
            items.sort((a, b) => (a.child_order > b.child_order) ? 1 : -1);
            return response;
        }
    });
    return items;
}