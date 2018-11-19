const http = require('http'),
    url =require('url')

const server = http.createServer(function (req, res) {
        const parseURL= url.parse(req.url, true)
        console.log(parseURL)
        res.writeHead(200, {
            'Content-type' : 'text/html'
        })
        res.end('<h1>Hello world</h1>')  
})

server.listen(3000,() => console.log("Server started at 3000"))

