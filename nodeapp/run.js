const http = require('http');
const url  = require('url');

const port = 3004;

const hostname = '127.0.0.1'; //localhost

const respond = (request, response) => {
	console.log(request.url);
	response.setHeader('Content-Type','text/plain');
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>run</tittle>
    </head>
    <body>`);
	response.write(`<h1>Hello</h1>`);
	response.end(`</body></html>`);
};

const server = http.createServer(respond);

server.listen(port,hostname, () => {console.log(
	`listening on port: ${port}, hostname: ${hostname}`)});