const homeRouting = require('./home');
const productRouting = require('./product');
const logoutRouting = require('./logout');
const { NOT_FOUND } = require('../constants/statusCode');

const requestRouting = (request, response) => {
    console.log(`INFO [${new Date().toISOString()}]: ${request.method} - ${request.url}`);
    if (request.url === '/') homeRouting(request.method, response);
    else if (request.url.startsWith('/product')) productRouting(request.url, request.method, response);
    else if (request.url === '/logout') logoutRouting(request.method, response);
    else if (request.url === '/kill') process.exit();
    else {
        response.writeHead(NOT_FOUND, { 'Content-Type': 'text/plain' });
        response.end('ERROR: requested url doesn’t exist.');
    }
};
module.exports = requestRouting;