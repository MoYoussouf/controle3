export default {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  testRegex: ".*\\.test\\.js$",
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["server.js"],
  testTimeout: 10000,
  verbose: true,
};
