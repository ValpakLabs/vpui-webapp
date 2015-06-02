var assert = require('assert');
var http = require('http');

// Our basic server
var server;

before(function(done) {
  server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.end();
  });
  server.listen(7500);
  done();
});

before(function(done) {
  done();
});

describe.only('User makes HTTP request', function() {

  context('Given a request URL of "/"', function() {
    it('should send a response with a 200 HTTP status code', function(done) {
      var serverPath = "http://localhost:7500";
      http.get(serverPath, function(response) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });
    it('should respond with the text "Hello, Node!"');
    it('should send the response as plain text');
  });

  context('Given a request URL other than "/"', function() {
    it('should send a response with a 404 HTTP status code');
    it('should respond with the text "Sorry, your request is bogus."');
    it('should send the response as plain text');
  });

});