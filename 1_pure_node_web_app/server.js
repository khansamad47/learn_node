var http = require('http');

function requestCallBack(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World!');
    response.end();
}

http.createServer(requestCallBack).listen(8000);
