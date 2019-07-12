const math = require('./math.js');

const colors = require('colors');

/*
const http = require('http');

const handleServer = function (req, res) {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write("<h1>Hello word</h1>");
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function () {
    console.log("Server on port 3000".blue);
});
*/

const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send("<h1>Hello word with Express y nodejs </h1>");
    res.end();
});

server.listen(3000, () => {
    console.log("Server on port 3000".red);
});
