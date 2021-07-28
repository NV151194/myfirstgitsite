const http = require('http');



//PORT 
const port = 3001;

//HOSTNAME
const hostname = '127.0.0.1'; //localhost

//callback function
const respond = (request,response) => {
	  if(request.url !== '/favicon.ico'){
        console.log(request.url);
        const query = url.parse(request.url, true).query;
        console.log(query);
        const pathname = url.parse(request.url, true).pathname;  
        console.log(pathname);

        //response.setHeader(header name, value)
        response.setHeader('Content-Type', 'text/plain');
        //writeHead(status code, {headers})
        response.writeHead(200, {'Content-Type': 'text/html'});
        //response.write sends the body of the response
    response.write(`<!DOCTYPE html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 2em;
        background-color: #fdfdff;
        border-radius: 0.5em;
        box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        div {
            margin: 0 auto;
            width: auto;
        }
    }
    </style>    
</head>

<body>
<div>
    `);
	response.write(`<h1>I am Ready</h1>
    <p>hi I am nandan prajapati</p>
    <p><a href="#">for more</a></p>
</div>
`);
     const check = car => (query.make === undefined || query.make.toLowerCase() === car.make.toLowerCase()) &&
                (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase()) &&
                (query.year === undefined || query.year === car.year) &&
                (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase()) &&
                (query.minprice === undefined || parseInt(query.minprice) <= car.price) &&
                (query.maxprice === undefined || parseInt(query.maxprice) >= car.price);
        if(pathname === '/cars'){
            cars.filter(check).forEach(car => {}
	response.end(`</body>
</html>
`);


}};

//CREATE A SEVER
const server = http.createServer(respond);

//LISTEN TO USER REQUEST
server.listen(port,hostname, () => {
console.log(`listening on port: ${port}, hostname: ${hostname}`)});


