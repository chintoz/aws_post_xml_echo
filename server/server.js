var debug = require('debug')('aws_post_xml_echo');
var app = require('../app');
var fs = require("fs");

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});