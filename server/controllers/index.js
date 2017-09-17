var models = require('../models');
//var helpers = require('../helpers.js');



module.exports = {
  messages: {
    get: function (req, res) {
    	 models.messages.get(function (err , data) {
    		if(err){
                //
            }else{
                res.json(data);
            }
    	});
    }, // a function which handles a get request for all messages
    post: function ({body}, res) {
        var params =[ body.message, body.username , body.roomname];

        models.messages.post(params , function(err,data){
            if(err){}
                else {res.sendStatus(201);
                }
        })
    	/*helpers.collectData(req , function (err, data). {
    		if (err) {
    			helpers.sendResponse(res , 'ERROR' , 404);
    		} else {
    			var result = models.messages.post(data , function () {
    				helpers.sendResponse(res , result , 201);
    			}) 
    	        
    		}
    	})*/
    	
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    	models.users.get(function(err , data){
            if(err){}
                else {
                    res.json(data);
                }
        }) 
    	// helpers.sendResponse(res , result );
    },
    post: function (req, res) {
    	 models.users.post(function(err , data){
             if(err){}
                else {
                    res.sendStatus(201);
                }
             }) 
         }) ;
        

    	// helpers.sendResponse(res , result , 201);
    }
  }
};

