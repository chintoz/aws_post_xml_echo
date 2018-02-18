var express = require('express');
var bodyParser = require('body-parser');
require('body-parser-xml')(bodyParser);
var routes = require('./routes/routes');

var app = express();

// Configure routing
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.xml());
app.use('/xml', routes);


// export app as a global variable
module.exports = app;