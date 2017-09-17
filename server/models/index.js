var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
    	//go to data base
    	var str = 'SELECT m.id , m.text, m.roomname , u.username FROM messages m LEFT OUTER JOIN users u ON  ( m.userid = u.id ) ORDER BY m.id desc' ;
    	db.query(str, cb)
    	//var result = //get messages 
    	//return the messages you got to the controllers ... using : 
    	  //cb(err, result);

    }, // a function which produces all the messages
    post: function (data , cb) {
    	//got to DB 
    	var str = 'INSERT INTO messages (text , userid, roomname ) VALUE ( ? , (SELECT id FROM users WHERE username = ?), ?)'
    	//store the data
    	db.query(str,data, cb)
    	// cb ();

    } // a function which can be used to insert a message into the database
  },

  users: {
     get: function (callback) {
      // fetch all users
      var queryStr = 'select * from users';
      db.query(queryStr, callback);
    },
    post: function (params, callback) {
      // create a user
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, callback);
    }
  }
};

