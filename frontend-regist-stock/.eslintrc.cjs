module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/jsx-runtime',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['react', 'eslint-comments', '@typescript-eslint'],
  rules: {},
};
