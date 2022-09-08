// three node.js modules are: core, local, third party

var http = require('http');
http.createServer(function(request,response)
{
    // if want to display as html code then use text/ html
    response.writeHead(200,{'Content-Type': 'text/plain'});
    
    response.end('Hello World in Node js\n');
}).listen(3000); 
// can use all port numbers greater than  3000 as this ports are mostly always free

console.log("Server is listening on http://127.0.0.1:3000");