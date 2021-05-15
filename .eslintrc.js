module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    //   'airbnb-base',
    '@nuxtjs/eslint-config-typescript',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
  },
  rules: {
    //   camelcase: 'off',
    //   'no-underscore-dangle': 'off',
    //   'no-param-reassign': 'off',
    'prettier/prettier': 'error',
    //   'import/no-extraneous-dependencies': 'off',
    //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //   'vue/html-self-closing': [
    //     'error',
    //     {
    //       html: {
    //         void: 'always',
    //         normal: 'always',
    //         component: 'always',
    //       },
    //       svg: 'always',
    //       math: 'always',
    //     },
    //   ],
  },
};
