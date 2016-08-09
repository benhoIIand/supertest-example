// Import the server we want to test
var app = require('../app/server');

// Import the SuperTest framework
var supertest = require('supertest');

// Give SuperTest the app we want to test
var testServer = supertest(app);

// Creating our unit tests
describe('SAMPLE unit test', function() {

    // First unit test
    // We get passed a callback called `done` which we call when
    // our test has finished
    it('should return user data', function(done) {
        testServer
            // Tell the test server to get data from the /user enpoint
            .get('/user')
            // Expect the response status code to be 200
            .expect(200)
            // Expect the content type to be JSON
            // /application\/json/ is a regex
            .expect('Content-type', /application\/json/)
            // Expect the body to equal this...
            .expect({
                name: 'Mariusz'
            })
            // Tell the test runner we've finished and are done
            .end(done);
    });
});
