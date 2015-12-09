var http = require('http');
var path = require('path');
var express = require('express');

//
// ## SimpleServer `SimpleServer(obj)`
//
// Creates a new instance of SimpleServer with the following options:
//  * `port` - The HTTP port to listen on. If `process.env.PORT` is set, _it overrides this value_.
//
var app = express();
var server = http.createServer(app);

// http://stackoverflow.com/questions/33818217/node-js-how-to-make-default-page-to-be-sth-other-than-index-html
// app.use(express.static(path.resolve(__dirname, 'app')));  // this defaults to index.html
// to rename client to app:  mv /home/ubuntu/workspace/client /home/ubuntu/workspace/app
app.use(express.static(path.resolve(__dirname, 'app'), {index: 'ItemDetails.html'}));

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Event Reg listening at", addr.address + ":" + addr.port);
});
