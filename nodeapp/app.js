const http = require('http');
const url = require('url');

//connection settings
//a port 
const port = 3003;
//hostname: IP 
const hostname = '127.0.0.1'; //localhost
//json file
const cars = require('./script/cars.js');

//callback function to be executed when a user makes a request to our server
const respond = (request, response) => {
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
        response.write(`<!doctype html>
<html>
<head>
    <title>CAR website</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css" >body {
        background-color: #8ABAAF;
        margin: 0;
        padding: 0;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 300px;
        text-align:center;
        margin: 5em auto;
        padding: 2em;
        background-color: #C7FBCD;
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
        }
    }</style>
   
   
       
</head>

<body>
`);
        response.write(`<h1><strong>CAR</strong></h1>`);
//        console.log(car.make.toLowerCase());
//        this is the query for searching  for make, model, year, transmission, minprice, maxprice 
        const check = car => (query.make === undefined || query.make.toLowerCase() === car.make.toLowerCase()) &&
                (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase()) &&
                (query.year === undefined || query.year === car.year) &&
                (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase()) &&
                (query.minprice === undefined || parseInt(query.minprice) <= car.price) &&
                (query.maxprice === undefined || parseInt(query.maxprice) >= car.price);
        if(pathname === '/cars'){
            cars.filter(check).forEach(car => {
                response.write(`
<hr>
<div>
<h1>${car.make}</h1>
<img src = '${car.url}' width='250' height='200' alt='car'>
<p>Model: ${car.model}</p>
<p>Year: ${car.year}</p>
<p>Transmission: ${car.transmission}</p>
<p>Price: $${car.price}</p>
</div>
`);
            });
        }
        response.end(`</div></body>
</html>`);
    }

};

//create a server
const server = http.createServer(respond);


//listen to user request
server.listen(port, hostname, () => {console.log(`listening on port: ${port}, hostname: ${hostname}`)});