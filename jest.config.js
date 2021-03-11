module.exports = {
  preset: 'jest-playwright-preset',
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './reports',
    }],
  ],
  testTimeout: 60000,
};
