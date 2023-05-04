module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'quote-props': [
      'error',
      'as-needed',
    ],
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'array-bracket-newline': [
      'error', 
      'consistent'
    ],
    'comma-style': ['error', 'last'],
    'vue/multi-word-component-names': ['off']
  }
};
