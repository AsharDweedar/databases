var mysql = require('mysql');

// Create a database connection and export it from this file.
exports.dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'chat'
    });
// You will need to connect with the user "root", no password,
// and to the database "chat".


