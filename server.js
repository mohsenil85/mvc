var http_IP = '127.0.0.1'; //local
//var http_IP = '10.0.0.13';//for the pi
var http_port = '8000';
var http = require('http');

var server = http.createServer(function(req, res) {
	require('./router').get(req, res);
});
server.listen(http_port, http_IP);
console.log('listening to http://' + http_IP + ':' + http_port);