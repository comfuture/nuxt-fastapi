module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/base'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'quote-props': 0,
    'quotes': [0, 'single'],
    'space-before-function-paren': 0,
    'space-in-parens': 0,
    'object-property-newline': 0,
    'generator-star-spacing': 0,
    'object-curly-spacing': 0,
    'dot-notation': 0,
    'comma-dangle': ['error', 'never'],
    'vue/component-definition-name-casing': 0
  },
  globals: {
    $nuxt: true
  }
}
