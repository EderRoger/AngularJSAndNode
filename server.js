var http = require('http');

var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!\n');
}

var server = http.createServer(requestListener);

// use socket.io
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){

    //Enviando dados para o client
    setInterval(function(){
        socket.emit('date', {'date': new Date()});
    }, 1000);
    
});

server.listen(8000, function(){
   console.log("AngularJSandNode no ar.");
});