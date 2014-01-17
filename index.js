var connect = require('connect');

var app = connect().use(connect.static('./'));

require('http').createServer(app).listen(process.env.PORT || 3000);