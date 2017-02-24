var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var authServer = 'http://localhost:10000',
    backendServer = 'http://localhost:8080';

app.all("/oauth/*", function(req, res) {
    console.log('redirecting to auth server');
    apiProxy.web(req, res, {target: authServer});
});

app.all("/api/*", function(req, res) {
    console.log('redirecting to backend server');
    apiProxy.web(req, res, {target: backendServer});
});

app.use(express.static(__dirname + '/dist'));
console.log("Aplikasi sudah dijalankan");
app.listen(process.env.PORT || 3000);
