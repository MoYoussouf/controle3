const fetch = require('node-fetch'); // For making HTTP requests
const server = require('../server'); // Import the server
const port = 3000; // Port where the server will run
let httpServer;

beforeAll((done) => {
  httpServer = server; // Use the server
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
  expect(response.status).toBe(200); // Expect HTTP 200 status
  expect(body).toBe('Hello, CI/CD!'); // Expect body to contain "Hello, CI/CD!"
});

test('GET /unknown should respond with 404', async () => {
  const response = await fetch(`http://localhost:${port}/unknown`);
  const body = await response.text();
  expect(response.status).toBe(404); // Expect HTTP 404 status
  expect(body).toBe('Route not found'); // Expect body to contain "Route not found"
});
