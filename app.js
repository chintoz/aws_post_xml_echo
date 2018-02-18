var express = require('express');
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
var routes = require('./routes/routes');

var app = express();

// Configure routing
app.use('/', routes);
app.use(bodyParser.xml());


// export app as a global variable
module.exports = app;