const http = require('http');
const url = require('url');

const port = 3002;

const hostname = '127.0.0.1'; // localhost

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
    response.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 
    <title>Upcoming Matches | Dream11</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
<style id="app-style">
.headerContainer_31f14 {
    padding-left: 10px;
    width: 100%
}
.headerContainer_31f14 {
    padding-left: 10px;
    width: 100%
}
.header_e8b8b {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px
}
.matchCardMainTitle_7b586 {
    color: #282828
}
.matchCardMainTitleDesktop_83a22 {
    font-size: 16px;
    font-weight: bold
}
.matchMainContainer_7e538 {
    margin-top: -8px
}

.matchCardTimer_a5620 {
    font-weight: 500;
    color: #e10000;
    text-align: center;
    padding: 8px
}

.matchCardTimerMobile_2e07e {
    font-size: 10px
}
.matchCardTimerDesktop_48a55 {
    font-size: 14px
}

.matchCardVs_9f2f5 {
    color: #282828;
    text-transform: uppercase
}
.matchCard_868db {
    text-decoration: none;
    color: inherit
}
.card_690e1 {
    background-color: #fff;
    margin: 8px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    overflow: hidden
}
.darkTheme_9e5a1 {
    margin: 12px 12px 8px 12px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 4px 6px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px
}


.matchCardHeader_2fd17 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px
}

.matchCardHeaderMobile_e7ff0 {
    height: 32px
}

.matchCardHeaderDesktop_8fb22 {
    height: 40px
}

.matchCardHeaderTitle_c5373 {
    color: #969696
}

.matchCardHeaderTitleMobile_2e07e {
    font-size: 10px
}

.matchCardHeaderTitleDesktop_a2024 {
    font-size: 12px
}
.matchCardMain_954a1 {
    display: flex;
    justify-content: space-between;
    min-height: 48px;
    align-items: center;
    margin: 8px 0
}
.flex_029e0 {
    display: flex
}
.squadShortName_a116b {
    position: relative;
    display: flex;
    align-items: center;
    white-space: nowrap;
    width: 40px;
    color: #282828;
    font-weight: 600
}
.squadShortNameLeft_db179 {
    left: 20px;
    justify-content: flex-start;
    font-size: 16px
}
.squadShortNameRight_42ab0 {
    right: 20px;
    justify-content: flex-end;
    font-size: 16px
}
</style>
</head>
<body>
`);

    response.write(`<div >
    <div class="headerContainer_31f14">
      <div class="header_e8b8b">`);
    const check = car => (query.make === undefined || query.make.toLowerCase() === car.make.toLowerCase()) &&
                (query.model === undefined || query.model.toLowerCase() === car.model.toLowerCase()) &&
                (query.year === undefined || query.year === car.year) &&
                (query.transmission === undefined || query.transmission.toLowerCase() === car.transmission.toLowerCase()) &&
                (query.minprice === undefined || parseInt(query.minprice) <= car.price) &&
                (query.maxprice === undefined || parseInt(query.maxprice) >= car.price);
        if(pathname === '/cars'){
            cars.filter(check).forEach(car => {
    response.write(`
         <div class="matchCardMainTitle_7b586 matchCardMainTitleDesktop_83a22">Upcoming Matches</div>
                                            </div>
                                        </div>
           <div class="matchMainContainer_7e538"><a class="matchCard_868db" href="#">
                <div class="card_690e1 darkTheme_9e5a1">
                   <div class="matchCardHeader_2fd17 matchCardHeaderDesktop_8fb22">
                        <div class="matchCardHeaderTitle_c5373 matchCardHeaderTitleDesktop_a2024">NBA 2020-21</div>
            </div>
                                                    <div class="matchCardMain_954a1">
                                                        <div class="flex_029e0">
                                                            <div class="squadShortName_a116b squadShortNameLeft_db179">PHX</div>
                                                        </div>
                                                        <div class="matchCardTimer_a5620 matchCardTimerDesktop_48a55">
                                                            <div>1h 59m left</div>
                                                        </div>
                                                        <div class="flex_029e0">
                                                            <div class="squadShortName_a116b squadShortNameRight_42ab0">DEN</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                 </div>
                                                </div>
                                            `);

    response.end(`
        </body>
</html>`);
};

const server = http.createServer(respond);

server.listen(port, hostname, () => {
    console.log(`listening on port: ${port}, hostname: ${hostname}`)
});