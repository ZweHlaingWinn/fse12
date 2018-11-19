const http = require('http')

const server = http.createServer(function (req, res) {
        console.log(req.headers)
    
        res.writeHead(200, {
            'Content-type' : 'text/html'
        })
        res.end('<h1>Hello world</h1>')  
})

server.listen(3000,() => console.log("Server started at 3000"))

