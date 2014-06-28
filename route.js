var Hapi = require('hapi');
var server = Hapi.createServer('localhost', 8000);

server.route({
 	method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
      reply('Hello ' + request.params.name);
	}
});

server.start(); 