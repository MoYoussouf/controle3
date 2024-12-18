const request = require('supertest');  // Import supertest to make HTTP requests
const http = require('http');         // Import the 'http' module
const server = require('../server');  // Adjust the path to your server.js file if needed

describe('GET /', () => {
    it('should respond with "Hello, CI/CD!"', (done) => {
        request(server)  // Send a request to the server
            .get('/')     // Make a GET request to the root route
            .expect(200)  // Expect HTTP status 200 (OK)
            .expect('Content-Type', /text\/plain/)  // Expect the content type to be plain text
            .expect('Hello, CI/CD!', done);  // Expect the server to respond with 'Hello, CI/CD!'
    });
});
