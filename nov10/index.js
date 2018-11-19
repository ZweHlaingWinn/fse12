const http = require('http')

const server = http.createServer(function (req, res) {
        console.log(req.method)
        console.log(req.url)
        res.end('incoming request')  
})

server.listen(3000,() => console.log("Server started at 3000"))

