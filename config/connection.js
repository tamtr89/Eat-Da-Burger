// Set up MySQL connection
var mysql = require("mysql");
var connection;

// This is for deploy to Heroku
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "tam89",
        database: "burgers_db"
    });
};

// Make connection
connection.connect(function (err) {
    if (err) {
        console.erro("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId);
});

// Export connection for our ORM to use
module.exports = connection;