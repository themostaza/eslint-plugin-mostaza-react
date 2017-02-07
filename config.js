'use strict';
const reactAppConfig = require('eslint-config-react-app');

const rules = {};

Object.keys(reactAppConfig.rules).forEach((ruleName) => {
  rules[`mostaza-react/${ruleName}`] = reactAppConfig.rules[ruleName];
});

module.exports = {
  parser: require.resolve('babel-eslint'),
  plugins: ['mostaza-react'],
  rules,
};
