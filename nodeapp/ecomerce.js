const http = require('http');
const url = require('url');
const fs = require('fs');
const style = ('./component/style.txt');
const styledata = fs.readFileSync(style, 'utf-8');
const nav = ('./component/nav.txt');
const navdata = fs.readFileSync(nav, 'utf-8');
const footer = ('./component/footer.txt');
const footerdata = fs.readFileSync(footer, 'utf-8');
const head = ('./component/head.txt');
const headdata = fs.readFileSync(head, 'utf-8');

const port = 3010;

const hostname = '127.0.0.1';

const details = require('./script/details.js');

const respond = (request, response) => {
  if(request.url !== '/favicon.ico'){
        console.log(request.url);
        const query = url.parse(request.url, true).query;
        console.log(query);
        const pathname = url.parse(request.url, true).pathname;  
        console.log(pathname);

  response.setHeader('Content-Type','text/plain');
  response.writeHead(200,{'Content-Type':'text/html'});
  response.write(`${headdata}${styledata}</head><body>`);
  response.write(`${navdata}`);

  const check = detail => (query.topic === undefined || query.topic.toLowerCase() === detail.topic.toLowerCase());
        if(pathname === '/details'){
           details.filter(check).forEach(detail => {
    response.write(`<div class="border"><details>
        <summary style="text-decoration: underline;">${detail.topic}</summary>
    <p>${detail.paragraph}<span><p><a href="#" target="_blank">Read more...</a></p></span></p>
<hr color='darkviolet';></details></div>
  `);});}
  
  response.write(`${footerdata}`);
  response.end(`</body></html>`);}};

const server = http.createServer(respond);
server.listen(port,hostname,()=>{console.log(`listening to the port: ${port}, hostname: ${hostname}`)});