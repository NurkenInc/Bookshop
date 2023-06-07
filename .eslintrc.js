module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:i18next/recommended',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.eslint.json', 
    ],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks'
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'no-multi-spaces': [2],
    "indent": [2, 2],
    "max-len": [2, { code: 105, ignoreComments: true }],
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
    "import/no-extraneous-dependencies": [1, { "devDependencies": true }],
    "no-underscore-dangle": "off",
    "@typescript-eslint/naming-convention": "off",
    "i18next/no-literal-string": [2, { markupOnly: true, onlyAttribute: [""] }],
    "jsx-a11y/no-static-element-interactions": [0],
    "jsx-a11y/click-events-have-key-events": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        "i18next/no-literal-string": "off",
        "max-len": "off",
      }
    },
  ],
};