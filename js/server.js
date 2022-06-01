var http = require('http');
var controller = require('./controller')

http.createServer(controller).listen(8080); //the server object listens on port 8080

