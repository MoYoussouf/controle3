const http = require('http');

// Create the server in the test file
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, CI/CD!');
});

beforeAll((done) => {
    // Start the server before running the tests
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
        done(); // Call done to indicate the server is ready
    });
});

test('GET / should respond with "Hello, CI/CD!"', async () => {
    const response = await fetch(`http://localhost:${port}`);
    const body = await response.text();
    expect(body).toBe('Hello, CI/CD!');
});

afterAll(() => {
    // Close the server after the tests are done
    server.close();
});
