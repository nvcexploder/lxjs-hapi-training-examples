var Hapi = require('hapi');
var Joi = require('joi');
var server = Hapi.createServer('localhost', 8000);

var config = {

	description: 'A hapi plugin configuration',
	validate: {
		params: {
			name: Joi.string().required().description('A name!')
		}
	},
	handler: function (request, reply) {

		reply('Hello ' + request.params.name + '!');
	}
}

server.route({
 	method: 'GET',
    path: '/hello/{name}',
    config: config
});

server.start(); 