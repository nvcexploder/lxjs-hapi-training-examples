var Hapi = require('hapi');

var server = new Hapi.Server(8000, { files: { relativeTo: __dirname } });

function validate (username, password, callback) {
    if (username == 'walmartlabs' && password == 'walmartlabs') {
        return callback(null, true, {username: username});
    } else {
        return callback("invalid credentials", false);
    }
}

// hapi-auth-basic is required, enables hapi to use basic http authentication
server.pack.register([require('hapi-auth-basic')], function (err){
    server.auth.strategy('basic', 'basic', { validateFunc: validate });

    /* go to:
    
            http://localhost:8000/public/img/hapi.png
            http://localhost:8000/private/txt/passwd.txt
    */
    server.route([
        { method: 'GET', path: '/public/{file*}', handler: { directory: { path: './directory/public/', listing: true } } },
        { method: 'GET', path: '/private/{file*}', config: {
            auth: {
                strategies: ['basic']
            },
            handler: {
                directory: {
                    path: './directory/private/',
                    listing: true
                }
            }
        }}
    ]);
    
    server.start(function(){
        console.log('server started on port', server.info.port);
    });
}); 