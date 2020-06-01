const { resolve } = require('path')

const projectRoot = resolve(__dirname)
const srcRoot = resolve(projectRoot, 'src')

module.exports = {
  collectCoverageFrom: [
    '<rootDir>/**/*.js',
    '!**/__tests__/**',
    '!**/*.spec.js'
  ],
  coverageDirectory: resolve(projectRoot, 'coverage'),
  coverageReporters: ['text'],
  projects: [
    {
      displayName: {
        name: '[Methods]',
        color: 'blueBright'
      },
      rootDir: srcRoot,
      testEnvironment: 'node',
      testMatch: ['<rootDir>/**/*.test.js']
    },
    {
      displayName: {
        name: '[Components]',
        color: 'blue'
      },
      moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': resolve(srcRoot, '__mocks__/style-mock.js'),
        '\\.png$': resolve(srcRoot, '__mocks__/file-mock.js'),
        '\\.svg$': resolve(srcRoot, '__mocks__/svg-mock.js')
      },
      rootDir: srcRoot,
      testEnvironment: 'jest-environment-jsdom-sixteen',
      testMatch: ['<rootDir>/**/*.spec.js'],
      setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        resolve(projectRoot, 'jest.setup.js')
      ]
    }
  ]
}
