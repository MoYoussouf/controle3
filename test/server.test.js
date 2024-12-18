const http = require('http');
const fetch = require('node-fetch'); // Assuming you are using node-fetch for HTTP requests
const server = require('../server'); // Your server file

let httpServer;
const port = 3000;

jest.setTimeout(30000); // Set timeout to 30 seconds

beforeAll((done) => {
  httpServer = http.createServer(server);
  httpServer.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    done(); // Notify Jest the server is ready
  });
});

afterAll((done) => {
  httpServer.close(() => {
    done(); // Notify Jest the server is closed
  });
});

test('GET / should respond with "Hello, CI/CD!"', async () => {
  const response = await fetch(`http://localhost:${port}`);
  const body = await response.text();
  expect(response.status).toBe(200); // Check for HTTP 200 status
  expect(body).toBe('Hello, CI/CD!'); // Check the response text
});

test('GET /unknown should respond with 404', async () => {
  const response = await fetch(`http://localhost:${port}/unknown`);
  const body = await response.text();
  expect(response.status).toBe(404); // Check for HTTP 404 status
  expect(body).toBe('Route not found'); // Check the response text
});
