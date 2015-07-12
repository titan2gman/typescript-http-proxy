/**
 * Module dependencies.
 */
var browserSync     = require('../../node_modules/browser-sync/index'); // require('browser-sync');
var proxyMiddleware = require('../../index');                           // require('http-proxy-middleware');

// configure proxy middleware
// context: '/' will proxy all requests
//     use: '/api' to proxy request when path starts with '/api'
var proxy = proxyMiddleware('/api', {
                target: 'http://www.example.org',
                changeOrigin: true   // for vhosted sites, changes host header to match to target's host
            });

browserSync({
    server: {
        baseDir: "./",
        port: 3000,
        middleware: [proxy],         // add the proxy to browser-sync
        open: false
    }
});

console.log('listening on port 3000');
console.log('try:');
console.log('  http://localhost:3000/api');
