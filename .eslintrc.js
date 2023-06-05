module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'no-multi-spaces': [2],
    "indent": [2, 2],
    "max-len": [2, { "code": 105 }],
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
    "linebreak-style": 2,
    "import/prefer-default-export": "off",
    "no-unused-variable": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "warn",
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "no-underscore-dangle": "off",
    "@typescript-eslint/naming-convention": "off",
  },
};