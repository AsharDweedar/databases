var mysql = require('mysql');

// Create a database connection and export it from this file.
var connection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'chat'
    });
// You will need to connect with the user "root", no password,
// and to the database "chat".


connection.connect();

module.exports = connection;
