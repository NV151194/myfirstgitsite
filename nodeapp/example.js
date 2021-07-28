const http = require('http');   
const url = require('url');


//port 
const port = 3006;

const hostname = '127.0.0.1'; //localhost
  
//callback
const respond = (request, response) => {
	console.log(request.url);
	response.setHeader('Content-Type','text/plain');
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(``);
	response.write(``);
	response.end(``);
};


//server 
const server = http.createServer(respond);

//listen to the server 
server.listen(port,hostname,() => {console.log(`litening to the port: ${port}, hostname: ${hostname}`)});