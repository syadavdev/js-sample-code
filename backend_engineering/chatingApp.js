const http = require("http");
const WebSocketServer = require("websocket").server
let connections = [];
let PORT = 8090

//create a raw http server (this will help us create the TCP which will then pass to the websocket to do the job)
const httpserver = http.createServer();

 //pass the httpserver object to the WebSocketServer library to do all the job, this class will override the req/res 
const websocket = new WebSocketServer({
    "httpServer": httpserver
})


httpserver.listen(PORT, () => console.log(`My server is listening on port ${PORT}`))


//when a legit websocket request comes listen to it and get the connection .. once you get a connection thats it! 
websocket.on("request", request=> {

    const connection = request.accept(null, request.origin)
    connection.on("message", message => {
        connections.forEach(c => c.send(`User ${connection.socket.remotePort} says: ${message.utf8Data}`))
    })

    connections.push(connection)

    connections.forEach(c => c.send(`User ${connection.socket.remotePort} just connected`))

})




//client code 
//let ws = new WebSocket("ws://localhost:8080");
//ws.onmessage = message => console.log(`Received: ${message.data}`);
//ws.send("Hello! I'm client")
