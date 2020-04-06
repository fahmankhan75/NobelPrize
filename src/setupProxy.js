const proxy = require('http-proxy-middleware');

//list all API endpoints to be proxied from 8083
module.exports = function(app) {
    app.use(
        proxy(
            [
                '/winners'
            ], 
            { 
                target: 'http://localhost:5000',
                changeOrigin: true
            }
        )
    );
}