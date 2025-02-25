import type { Config } from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  clearMocks: true,
  globals: {},
  rootDir: './',
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@common(.*)$': '<rootDir>/src/common/$1',
    '^@features(.*)$': '<rootDir>/src/features/$1',
    '^@pages(.*)$': '<rootDir>/src/pages/$1',
    '^@test-utils(.*)$': '<rootDir>/test-utils/$1',
  },
};

export default config;
