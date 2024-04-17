module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended-type-checked', // @typescript-eslint @v6
    'plugin:@typescript-eslint/stylistic-type-checked', // @typescript-eslint @v6
  ],
  parserOptions: {
    project: 'vite.config.ts'
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
}
