var http = require('http');

var server = http.createServer(function(request, response) {
  
  var statusCode;
  var responseText;

  if (request.url !== '/') {
    statusCode = 404;
    responseText = 'Sorry, your request is bogus.';
  } else {
    statusCode = 200;
    responseText = 'Hello, Node!';
  }

  response.writeHead(statusCode, {
    'content-type': 'text/plain' 
  });
  response.write(responseText);

  response.end();
});

module.exports = server;