// Set up MySQL connection.
var mysql = require("mysql");



class Database {
    constructor( config ) {
        this.connection = mysql.createConnection( config );
    }
    query( sql, args ) {
        return new Promise( ( resolve, reject ) => {
            this.connection.query( sql, args, ( err, rows ) => {
                if ( err ) {
                    return reject( err );
                }
                resolve( rows );
            } );
        } );
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.connection.end( err => {
                if ( err ) {
                    return reject( err );
                }
                resolve();
            } );
        } );
    }
}

if(process.env.JAWSDB_URL){
    const db = new Database(process.env.JAWSDB_URL)
} else {
    const db = new Database({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "48kathmandu`",
        database: "burgers_db"
      });
}


// Make connection.

// Export connection for our ORM to use.
module.exports = db;
