var assert = require('assert');
var http = require('http');
var superagent = require('superagent');

// Our basic server
var server;
var serverPath = "http://localhost:7500";

before(function(done) {
  server = http.createServer(function(request, response) {
    
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
  server.listen(7500);
  done();
});

after(function(done) {
  server.close();
  done();
});

describe.only('User makes HTTP request', function() {

  context('Given a request URL of "/"', function() {
    it('should send a response with a 200 HTTP status code', function(done) {
      request(function(err, res){
        assert.equal(res.statusCode, 200);
        done();
      })
    });
    
    it('should respond with the text "Hello, Node!"', function(done) {
      request(function(err, res){
        assert.equal(res.text, 'Hello, Node!');
        done();
      });
    });

    it('should send the response as plain text', function(done) {
      request(function(err, res){
        assert.equal(res.headers['content-type'], 'text/plain');
        done();
      });
    });
  });

  context('Given a request URL other than "/"', function() {
    it('should send a response with a 404 HTTP status code', function(done) {
      superagent.get(serverPath + '/hello').end(function(err, res) {
        assert.equal(res.statusCode, 404);
        done();
      })
    });

    it('should respond with the text "Sorry, your request is bogus."', function(done) {
      superagent.get(serverPath + '/hello').end(function(err, res) {
        assert.equal(res.text, 'Sorry, your request is bogus.');
        done();
      })
    });

    it('should send the response as plain text', function(done) {
      superagent.get(serverPath + '/hello').end(function(err, res) {
        assert.equal(res.headers['content-type'], 'text/plain');
        done();
      })
    });
  });

});

function request(cb) {
  superagent.get(serverPath).end(cb);
};