const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World teste com img do docker outro post!");
});

const port = process.env.PORT || 1337;
server.listen(port);
