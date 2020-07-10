module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'tslint-plugin-prettier', 'tslint-config-prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'linebreak-style': 0,
    'semi': 'off',
    'prettier': true,
    'prettier/prettier': ['error', {
      'endOfLine': 'auto'
    }]
  }
}
