var Hapi = require('hapi');
var Joi = require('joi');
var server = Hapi.createServer('localhost', 8000);

var config = {

	description: 'A hapi plugin configuration',
	validate: {
		payload: {
			name: Joi.string().required().description('a name!'),
			email: Joi.string().email().required().description('an email!')
		}
	},
	handler: function (request, reply) {

		reply('Hello ' + request.payload.name + '!');
	}
}

server.route({
 	method: 'POST',
    path: '/person',
    config: config
});

server.start(); 