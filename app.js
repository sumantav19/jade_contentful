

var contentful = require('contentful');
var client = contentful.createClient({
	space : 'a075i0mc3urv',
	accessToken : '25eaaf272b79ec778c8ff0b90f55e9dfb9b0507ad78044db262bf800f09f2e0f'
})

client.entry('Mw98VtQp0cy02Ys4iwyQu')
	.then(function  (entry) {
		// body...
		return console.log(entry+'data');
	},function(err){
		console.log('error')
	});