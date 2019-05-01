module.exports = {
  settings: {
    react: {
      version: 'detect',
    }
  },
  extends: ['prettier', 'standard', 'react-app'],
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'standard/no-callback-literal': 'off',
  }
}
