var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('front_to_back', function(msg){
      console.log(msg)
      io.emit('back_to_front', msg);
    });
  });
http.listen(3000, function(){
  console.log('listening on *:3000');
});