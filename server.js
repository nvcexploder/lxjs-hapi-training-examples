 var Hapi = require('hapi');
 var server = Hapi.createServer('localhost', 8000);

server.route({
	method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
      reply('there!');
    }
});

server.start(); 