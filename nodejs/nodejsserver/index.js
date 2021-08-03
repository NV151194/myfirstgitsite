const http = require('http');

const port = 3000;

const hostname = '127.0.0.1'; 

const respond = (request,response) => {
	 if(request.url !== '/favicon.ico'){
	console.log(request.url);
	//response.setHeader(header name, value)
        response.setHeader('Content-Type', 'text/plain');
        //writeHead(status code, {headers})
        response.writeHead(200, {'Content-Type': 'text/html'});
  
                 if(request.url == '/home'){
        response.write(`
        	welcome to my website`);
        
}
         if(request.url == '/aboutus'){
        response.write(`
        	aboutus`);
        
}
response.end();
}	}

const server = http.createServer(respond);


    

server.listen(port, hostname, () => {console.log(`listening on port: ${port}, hostname: ${hostname}`)});