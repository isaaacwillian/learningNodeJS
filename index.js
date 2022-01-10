const http = require("http");
const url = require("url-parse");
const fs = require('fs');

handleFile = (req, res) => {
    let path = url(req.url).pathname; //path é oq vem dps> xx.com/teste

    if (path == "" || path == "/") {
        path = "/index.html";
    }

    let fileName = "." + path;

    fs.readFile(fileName, (err, data) => {
        if (err) {
            if (!handleRequest(req, res, path)) {
                res.writeHead(404, { "content-type": 'text/html; charset="utf8"', })
                res.end("<h1>Página não encontrada</h1>")
            }
        } else {
            res.writeHead(200, { "Context-Type": "text/html" })
            res.write(data);
            res.end();
        }
    })
}

handleRequest = (req, res, path) => {

    let method = req.method;
    console.log(method)
    if (path == "/teste") {
        res.end("Teste");
        return true;
    }
    return false;
}

http.createServer((request, response) => {

    handleFile(request, response);

}).listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Servidor funcionando");
    }
});