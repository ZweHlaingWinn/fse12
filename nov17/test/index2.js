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


    function fileAccess(resolveURL) {
        return new Promise(function (resolve, reject) {
            fs.access(resolveURL, fs.constants.F_OK, function (error) {
                if (error) {
                    reject(error)
                } else {
                    resolve(resolveURL)
                }
            })
        })
    }


    function fileRead(resolveURL) {
        return new Promise(function (resolve, reject) {
            fs.readFile(resolveURL, function (error, data) {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            })
        })
    }

    function handler(req, res) {
   
        const baseURL = url.parse(req.url)
        let resolveURL =  __dirname + (baseURL.pathname === '/' ?  '/index.html': baseURL.pathname)
        res.writeHead(200, {'Content-type' : MIME[path.extname(resolveURL)]});

        console.log(resolveURL);    

        fileAccess(resolveURL)
            .then(fileRead)
            .then(d => res.end(d))
            .catch(e => console.log(e))
    }


    const server = http.createServer(handler);


    server.listen(port, ()=> console.log(`Server Started at port ${3000}`));