module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'eslint-config-standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'comma-dangle': 'off',
    'import/newline-after-import': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
  },
}
