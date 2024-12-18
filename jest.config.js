module.exports = {
  collectCoverage: true, // Collect test coverage
  collectCoverageFrom: ['server.js'], // Ensure coverage collection from the server.js file
  coverageDirectory: 'coverage', // Output directory for the coverage reports
  coverageReporters: ['text', 'lcov'], // Report in text and lcov formats
  testRegex: '.*\\.test\\.js$', // Match files with .test.js for testing
  verbose: true, // Show detailed output of tests
  testEnvironment: 'node', // Use Node.js environment for testing
};
