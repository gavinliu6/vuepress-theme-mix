module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/essential', 'standard'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'space-before-function-paren': [
      'error',
      {
        named: 'never',
      },
    ],
    'array-callback-return': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/script-setup-uses-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
  },
}
