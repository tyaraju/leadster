const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ['/node_modules/','/.next/'],
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/__tests__/index.test.js']
};
module.exports = createJestConfig(customJestConfig);