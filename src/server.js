const fs = require('fs');
const http = require('http');
const url = require('url');

const homeController = require('./controllers/homeController');
const verifyOTPController = require('./controllers/verifyOTPController');
const successController = require('./controllers/successController');

const DataHandle = require('./data/index');



const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");

    const jsonData = DataHandle.readJSON();
    const parsedUrl = url.parse(req.url);
    const path = parsedUrl.pathname;


    if (path === '/') {
        homeController.index(req, res);

    } else if (path === '/verify' && req.method === 'POST') {
        homeController.verify(req, res);
    } else if (path === '/otp') {
        verifyOTPController.index(req, res);
    } else if (path === '/verify-otp' && req.method === 'POST') {
        verifyOTPController.verify(req, res);
    } else if (path === `/success/${jsonData.focus.phone}`) {
        successController.index(req, res);

    } 

});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
