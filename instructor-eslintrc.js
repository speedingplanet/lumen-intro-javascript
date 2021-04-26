// This requires additional setup as specified here:
// https://github.com/johnpaxton/class-setup/blob/master/linting-configuration.md

module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ['@babel'],
  parser: '@babel/eslint-parser',

  extends: ['standard', 'standard-with-typescript'],
  rules: {
    'array-bracket-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2, { MemberExpression: 1 }],
    'max-len': ['error', { code: 90, comments: 120 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'prefer-const': 'off',
    semi: ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'always'],
  },
  ignorePatterns: ['node_modules'],
};
