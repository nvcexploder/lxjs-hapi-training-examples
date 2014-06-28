var Hapi = require('hapi');


var server = new Hapi.Server(8000);

var mapper = function (request, callback) {

    callback(null, 'http://www.google.com/search?q=' + request.params.term);
};

server.route({ 
	method: '*', 
	path: '/', 
	handler: { 
		proxy: { 
			host: 'google.com', 
			port: 80, 
			redirects: 5 
		} 
	} 
});

server.route({ 
	method: 'GET', 
	path: '/{term}', 
	handler: { 
		proxy: { 
			mapUri: mapper 
		} 
	} 
});

server.start();
