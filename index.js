const http = require('http');
const fs = require('node:fs');
const path = require('path');

const server = http.createServer((req, res) => {
        let filePath;
        let status = 200;
        if(req.url === '/'){
            filePath = path.join(__dirname, 'index.html');
        } else if(req.url === '/about') {
            filePath = path.join(__dirname, 'about.html');
        } else if (req.url === '/contact-me'){
            filePath = path.join(__dirname, 'contact-me.html');
        } else {
            filePath = path.join(__dirname, '404.html');
            status = 404;
        }
        fs.readFile(filePath, (err, data) => {
            if(err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                return res.end('Server error.');
            }
            res.writeHead(status, {'content-type': 'text/html'});
            return res.end(data);
        }); 
})

server.listen(8080, () => {
    console.log('Server running on port 8080')
});
