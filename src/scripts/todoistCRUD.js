const $ = require( "jquery" );

const apiUrl = 'https://api.todoist.com/sync/v8/sync';
const token = "a20db3a3e7de819db9fc1b3878cb2b5d606f0a17";
let syncToken;

/** Connection to a grocery list in Todoist
 *  Imports items from that list and adds it to this list
 *
 * @returns {Promise<[]>} Returns array of items from Todoist
 * @constructor
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



/**
 * Outdated
 */

//
// const command = [];
//
// let genId = function () {
//     return Math.random().toString(36).substr(2, 9);
// };
// //
// // let Item = function (type) {
// //     this.type = type;
// //     this.temp_id = genId();
// //     this.uuid = genId();
// //     this.args = {};
// //
// //     this.addArgs = function (key, value) {
// //         this.args[key] = value;
// //     };
// //     command.push(this);
// // };

// async function sendRequest(commands) {
//     let data = {
//         'token': token,
//         'sync_token': syncToken,
//         'commands': JSON.stringify(commands, null, 2)
//     };
//
//     await $.ajax({
//         url: apiUrl,
//         data: data,
//         type: 'POST',
//         success: function (response) {
//             return response;
//         }
//     });
// }
// export async function TodoistDelete(value) {
//     command.length = 0;
//
//     const newItem = new Item('item_delete');
//
//     newItem.addArgs('id', value);
//
//     delete newItem.addArgs;
//
//     await sendRequest(command);
// }

//
// export async function TodoistCreate(value) {
//     command.length = 0;
//
//     if (Object.prototype.toString.call(value) === '[object String]') {
//         const newItem = new Item('item_add');
//
//         newItem.addArgs('content', value);
//         newItem.addArgs('project_id', 2228491362);
//
//         delete newItem.addArgs
//
//     } else if (Object.prototype.toString.call(value) === '[object Array]') {
//         value.forEach(item => {
//             const newItem = new Item('item_add');
//
//             newItem.addArgs('content', item);
//             newItem.addArgs('project_id', 2228491362);
//
//             delete newItem.addArgs;
//         });
//     }
//
//     //todo fixa prestanda
//     await sendRequest(command);
//
// }
//
// export async function Update(items) {
//     command.length = 0;
//
//     items.forEach(item => {
//         const newItem = new Item('item_update');
//
//         newItem.addArgs('id', item.id);
//         newItem.addArgs('content', item.content);
//         newItem.addArgs('priority', item.priority);
//
//         delete newItem.addArgs;
//     });
//     await sendRequest(command);
// }
//
// export async function TodoistReorder(items) {
//     command.length = 0;
//
//     const newItem = new Item('item_update');
//
//     let args = [];
//
//     items.forEach(item => {
//         args.push({
//             id: item.id,
//             child_order: item.child_order
//         });
//     });
//
//     newItem.addArgs('items', args);
//
//     delete newItem.addArgs;
//     delete newItem.temp_id;
//
//     await sendRequest(command);
// }
