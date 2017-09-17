var models = require('../models');



module.exports = {
  messages: {
    get: function (req, res) {
    	var result = models.users.get(req) 
    	res.end(result);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    	var result = models.users.post(req) 
    	res.end(result);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	var result = models.users.get(req) 
    	res.end(result);
    },
    post: function (req, res) {
    	var result = models.users.post(req) 
    	res.end(result);
    }
  }
};

