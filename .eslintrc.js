module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    APP_TYPE: true,
  },
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'comma-dangle': [1, 'always-multiline'],
    'eol-last': [2, 'always'],
    quotes: [1, 'single'],
    semi: [1, 'always'],
    'jsx-quotes': [1, 'prefer-single'],
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
};
