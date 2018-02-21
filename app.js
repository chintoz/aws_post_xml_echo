var express = require('express');
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
var routes = require('./routes/routes');

var app = express();

// Function to read raw body
function rawBody(req, res, next) {
    req.setEncoding('utf8');
    req.rawBody = '';
    req.on('data', function(chunk) {
        req.rawBody += chunk;
    });
    req.on('end', function(){
        next();
    });
}
  
// Configure routing
app.use(rawBody);
app.use('/', routes);

// export app as a global variable
module.exports = app;