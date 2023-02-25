// Importing the Supertest library
var request = require('supertest');

// Importing the Express application instance we want to test
var app = require('../index.js');

// Defining a test suite for the GET endpoint
describe('GET /', function() {
  it('responds with hello world', function(done) {
    // Make a GET request to the root endpoint
    request(app)
      .get('/')
      // Expect the response to have a status code of 200 and a body of "hello world"
      .expect(200, 'hello world', done);
  });
});
