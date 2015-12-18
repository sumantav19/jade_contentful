var Client = require('node-rest-client').Client;
var client = new Client();

client.get('https://cdn.contentful.com/spaces/a075i0mc3urv?access_token=92a696fdb7ed270f1a9751f991400eaa9532bf3f819b20abb0ea86bcd137ceaf',function(data,response){
					console.log(data);
					return data;
				},function(err){
					console.log(err);
				});