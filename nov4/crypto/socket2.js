const net = require('net')

const sockets =[]

const server = net.createServer(function (socket) {
    socket.write('connected welcome')
    sockets.push(socket)

    socket.on('data', function (data) {
        sockets.forEach( s => 
            {
                if (socket === s)  return; 
                    s.write(data)
                
            })
    })
})

server.listen(8000, () => console.log("Server Started at 8000"))


//telnet localhost 8000