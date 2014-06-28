var Hapi = require('hapi');

var options = {
    views: {
        engines: { html: require('handlebars') },
        path: __dirname + '/views'
    }
};

var server = Hapi.createServer(8000, options);


var handler = function (request, reply) {

    reply.view('view', {
        version: Hapi.version,
        message: 'Hello World!'
    });
};

server.route({
    method: 'GET',
    path: '/',
    handler: handler
});

server.start(); 