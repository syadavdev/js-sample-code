import net from "net"

const server = net.createServer(socket => {
    console.log(`TCP Handshake successful with : ${socket.remoteAddress} : ${socket.remotePort}`)
    socket.write("Hello client!")
    socket.on(data => {
        console.log(`Receive data ${data.toString()}`)
    })
})

server.listen(8081, "127.0.0.1")