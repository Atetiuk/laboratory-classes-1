const homeRouting = (method, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(`
        <html>
            <head><title>Shop - Home</title></head>
            <body>
                <h1>Home</h1>
                <nav>
                    <a href="/product/add">Add product</a>
                    <a href="/product/new">Newest product</a>
                    <a href="/logout">Logout</a>
                </nav>
            </body>
        </html>
    `);
};
module.exports = homeRouting;
