var models = require('../models');
var helpers = require('../helpers.js');



module.exports = {
  messages: {
    get: function (req, res) {
    	var result = models.messages.get(function (data) {
    		helpers.sendResponse(res , data );
    	});
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    	helpers.collectData(req , function (err, data). {
    		if (err) {
    			helpers.sendResponse(res , 'ERROR' , 404);
    		} else {
    			var result = models.messages.post(data , function () {
    				helpers.sendResponse(res , result , 201);
    			}) 
    	        
    		}
    	})
    	
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	var result = models.users.get(req) 
    	helpers.sendResponse(res , result );
    },
    post: function (req, res) {
    	var result = models.users.post(req) ;

    	helpers.sendResponse(res , result , 201);
    }
  }
};

