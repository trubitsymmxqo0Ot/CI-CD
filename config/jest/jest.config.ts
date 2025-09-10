import type { Config } from "jest";
import { defaults } from "ts-jest/presets";
const config: Config = {
  preset: "ts-jest",
  ...defaults,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  rootDir: "../../",
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)", //Подходит и для mac oc, и для windows
  ],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTest.ts"],
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/config/jest/__mocks__/svg.tsx',  
    "\\.(scss|css|sass|less)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  // transform: {
  //   ".+\\.(svg)$": "jest-transform-stub"
  // }
};

export default config;
