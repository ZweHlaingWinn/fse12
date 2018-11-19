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
            const stream = fs.createReadStream(resolveURL)

            stream.on('open',function () {
                resolve(stream)
            })
            stream.on('error',function (error) {
                reject(error)
            })
        })
    }

    function handler(req, res) {
   
        const baseURL = url.parse(req.url)
        let resolveURL =  __dirname + (baseURL.pathname === '/' ?  '/index.html': baseURL.pathname)
        // res.writeHead(200, {'Content-type' : MIME[path.extname(resolveURL)]});

        // console.log(resolveURL);    

        fileAccess(resolveURL)
            .then(fileRead)
            .then(stream => stream.pipe(res))
            .catch(e => console.log(e))
    }


    const server = http.createServer(handler);


    server.listen(port, ()=> console.log(`Server Started at port ${3000}`));