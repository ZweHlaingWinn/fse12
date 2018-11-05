const net = require('net')

const sockets =[]

const server = net.createServer(function (socket) {
    socket.end('connected welcome')
})

server.listen(8000, () => console.log("Server Started at 8000"))