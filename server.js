var http = require('http');
var url = require('url');
var server;


var requestListener = function (req, res) {
  res.writeHead(200);
  res.end('<h1>Hello! Try the <a href="/#/tela1">Tela 1</a></h1>!');
}

server = http.createServer(requestListener);

server.listen(8001, function(){
	console.log('On air');
});

// use socket.io
var io = require('socket.io').listen(server);

// define interactions with client
io.sockets.on('connection', function(socket){
    
    setInterval(function () {
     socket.emit('send:time', { time: (new Date()).toString()
     });
    }, 1000);	

    //recieve client data
    socket.on('client_data', function(data){
        process.stdout.write(data.letter);
    });
    //receive the bonita calls
    socket.on('url_data', function(data){
        //emit to angular listen function
        console.log('Received message from client!',data.value);
        sendDataToReload(data.value);        
    });

    sendDataToReload = function(data){
      console.log('emit message to client!',data);
      //socket.emit('reload_notification',{'url': data});
      socket.broadcast.to("bonita_room").emit('reload_notification',{'url': data});
    };
});
