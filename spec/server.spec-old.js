var assert = require('assert');

function add(x, y) {
  return x + y;
}

describe('User makes HTTP request', function() {
  it('will respond with "Hello, Node!"');
});

describe('User adds numbers', function() {
  it('should output 10 for 5 and 5', function() {
    var result = add(5, 5);
    assert.equal(result, 10);
  });

  it('should output 6 for 3 and 3', function() {
    var result = add(3, 3);
    assert.equal(result, 6);
  });
});