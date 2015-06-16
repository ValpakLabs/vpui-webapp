var assert = require('assert');
var superagent = require('superagent');
var server = require('../server');

// Our basic server
var port = 7500;
var serverPath = "http://localhost:" + port;

before(function(done) {
  server.listen(port);
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