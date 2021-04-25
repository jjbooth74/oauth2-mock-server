'use strict';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'TestResults/coverage',
  coveragePathIgnorePatterns: ['<rootDir>/test/'],
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'TestResults', outputName: 'testresults.xml' }],
  ],
  coverageReporters: ['text', 'html', 'cobertura'],
  moduleNameMapper: {
    '^jose/(.*)$': '<rootDir>/node_modules/jose/dist/node/cjs/$1'
  }
};
