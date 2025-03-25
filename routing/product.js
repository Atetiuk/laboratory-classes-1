const fs = require('fs');
const { FOUND } = require('../constants/statusCode');

const productRouting = (url, method, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    if (url === '/product/add' && method === 'GET') {
        response.end('<html><head><title>Shop - Add product</title></head><body><h1>Add Product</h1><form method="POST" action="/product/add"><input name="name" /><textarea name="description"></textarea><button type="submit">Add</button></form></body></html>');
    } else if (url === '/product/add' && method === 'POST') {
        let body = '';
        request.on('data', chunk => body += chunk);
        request.on('end', () => {
            fs.writeFileSync('product.txt', body);
            response.writeHead(FOUND, { 'Location': '/product/new' });
            response.end();
        });
    } else if (url === '/product/new') {
        const data = fs.existsSync('product.txt') ? fs.readFileSync('product.txt', 'utf8') : 'No products found';
        response.end(`<html><head><title>Shop - Newest product</title></head><body><h1>Newest Product</h1><p>${data}</p></body></html>`);
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('ERROR: requested url doesn’t exist.');
    }
};
module.exports = productRouting;