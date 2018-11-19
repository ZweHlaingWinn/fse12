const http = require('http'),
    port = 3000,
    url = require('url'),
    fs = require('fs'),
    path= require('path')
    MIME = {
        '.html':'text/html',
        '.css': 'text/css',
        '.js':'application/javascript',
        '.png':'image/png'
    }

    function handler(req, res) {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })

        const baseURL = url.parse(req.url)
        let resolveURL =  __dirname + (baseURL.pathname === '/' ?  '/index.html': baseURL.pathname)

        console.log(resolveURL);

        fs.access(resolveURL, fs.constants.F_OK, function (error) {
            if (error) {
                res.writeHead(404);
                res.end('not found')
            } else {
                fs.readFile(resolveURL, function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        res.end('internal server error');
                    } else {
                        res.writeHead(200, {'Content-type' : MIME[path.extname(resolveURL)]});
                        res.end(data);
                    }
                })
            }
        })

    
    }


    const server = http.createServer(handler);


    server.listen(port, ()=> console.log(`Server Started at port ${3000}`));