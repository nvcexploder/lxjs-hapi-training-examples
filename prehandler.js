var Hapi = require('hapi');

var server = new Hapi.Server(8000);

function onPreHandler (request, next) {
    request.user = {username: 'walmartlabs', profile: {picUrl: ""}, access_token: ""};
    
    next();
}

server.ext('onPreHandler', onPreHandler);

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply(request.user);
    }
});

server.start(function(){
    console.log("server started on port", server.info.port);
});

