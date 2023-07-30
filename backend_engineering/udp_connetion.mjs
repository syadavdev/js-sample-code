import dgram from "dgram"

const socket = dgram.createSocket("udp4")
socket.bind(5543, "127.0.0.1");
socket.on("message", (msg, info) => {
    console.log(`mssage from client ${info.address} ${info.port} ${msg} `)
})