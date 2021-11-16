module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  // see https://github.com/zeit/next.js/issues/8663
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
  // see https://stackoverflow.com/questions/50863312/jest-gives-cannot-find-module-when-importing-components-with-absolute-paths
  moduleDirectories: ['node_modules', '<rootDir>'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/__tests__/utils'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
};
