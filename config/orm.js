// Import MySQL connection.
var db = require("./connection");

async function selectAll(){
    return await db.query('SELECT * FROM burgers')
}

async function insertOne(burger){
    return await db.query('INSERT INTO burgers (burgername) VALUES (?)', [burger])
}

async function updateOne(burger){
    return await db.query('UPDATE burgers SET eaten = true WHERE id = ?',[burger])
}

module.exports = {selectAll,insertOne,updateOne};
