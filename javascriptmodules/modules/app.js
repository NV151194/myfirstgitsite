const url =  require('url');
const path =  require('path');
const fs =  require('fs');

let pathname = url.parse(request.url, true).pathname; 
if(pathname === '/favicon.ico'){
	return false;
}
pathname = decodeURLComponent(pathname);
const staticpathname = path.join((___dirname),'..',foldername);
const fullpathname = path.join(staticpathname,pathname);


if(!fs.existsSync(fullpathname)){
	console.log(`file doesn't exists`);
	response.write(` 404 file not found`);
	response.end();
}else{
	response.write(`file exists`);
	response.end();
}
