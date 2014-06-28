var Hapi = require('hapi');


var server = new Hapi.Server(8000, { files: { relativeTo: __dirname } });

var filePath = function (request) {
	
    return './' + request.params.file;
};

server.route([
    { method: 'GET', path: '/{file}', handler: { file: filePath } }
]);

server.start();
