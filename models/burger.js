// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

async function update(burger){
    return await orm.updateOne(burger)
}

async function show(){
    return await orm.selectAll();
}

async function insert(burger){
    return await orm.insertOne(burger);
}
// Export the database functions for the controller (catsController.js).
module.exports = {update,show,insert};
