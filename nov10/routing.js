const http = require('http'),
    url =require('url'),
    port = 3000,
    routes = {
        "GET":{
            "/": function (req, res) {
                res.writeHead(200)
                res.end("Welcome Home")
            }
        },
        "POST":{

        },
        "N/A": function (req, res) {    
            res.writeHead(404)
            res.end("NOt Found")
        }

    }

const server = http.createServer(function (req, res) {
        let baseURL = url.parse(req.url, true)
        let resolve = routes[req.method][baseURL.pathname]
        resolve !== undefined ? resolve(req, res) : routes["N/A"](req, res)
})

server.listen(port,() => console.log(`Server started at ${port}`))

