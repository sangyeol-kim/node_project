var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//on은 듣는것 emit은 보내는것
//소켓은 한명 io는 전체 broadcasting
io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});