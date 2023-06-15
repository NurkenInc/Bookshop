module.exports = {
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
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
    'react-hooks',
    'project-fsd-arch'
  ],
  ignorePatterns: ['.eslintrc.js', 'reports', 'index.html'],
  rules: {
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'no-multi-spaces': [2],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "max-len": [2, { code: 130, ignoreComments: true }],
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
    "no-undef": "off",
    "react/no-array-index-key": "warn",
    "arrow-body-style": "off",
    "project-fsd-arch/path-checker": "error",
    "import/extensions": "off", // fix
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
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
};