// Set up MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "tam89",
    database: "burgers_db"
});

// Make connection
connection.connect(function (err) {
    if (err) {
        console.erro("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id: " + connection.threadId); 
});

module.exports = connection;