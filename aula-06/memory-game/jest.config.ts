/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ["**/*.spec.ts", "**/*.test.ts"],
  coveragePathIgnorePatterns: [],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "<rootDir>/__tests__/environment/customEnvironment.js",

  modulePaths: ["<rootDir>/src"],
  modulePathIgnorePatterns: ["<rootDir>/__tests__/environment/"],
  
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  moduleFileExtensions: [
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
};
