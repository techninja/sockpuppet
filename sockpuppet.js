/**
 * @file Experimental server to host webgl sock puppet control data streaming.
 */

// REQUIRES ====================================================================
var express = require('express');          // Express Webserver Requires --=-=-=
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);     // Socket.io for streaming


var port = 3883;

// Start express hosting site from "public" folder on the given port
server.listen(port);
app.use("/", express.static(__dirname + '/public'));
app.use("/control", express.static(__dirname + '/public/control.html'));

console.log('SockPuppet server listening on localhost:' + port);

// SOCKET DATA STREAM ==========================================================
io.on('connection', function(socket){
  console.log('user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  // Emit data we got back to all clients
  socket.on('gdata', function(d){
    io.emit('gdata', d);
  });

  socket.on('touch', function(amt){
    io.emit('touch', amt);
  });
});
