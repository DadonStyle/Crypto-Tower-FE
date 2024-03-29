module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['airbnb', 'eslint:recommended', 'plugin:react/recommended'],
  plugins: ['import', 'react', 'react-hooks'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'linebreak-style': 0,
    'react/display-name': 'off',
    'no-debugger': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'react/forbid-prop-types': 'off',
    'max-len': 'off',
    'react/require-default-props': 'off',
    'import/no-cycle': 'off',
    'no-console': 'off',
    'react/jsx-boolean-value': 'off',
    'no-return-assign': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-named-as-default': 'off',
    'import/named': 'off',
    'import/no-named-as-default-member': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/jsx-curly-newline': 'off',
    'nonblock-statement-body-position': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-no-target-blank': 'off',
    'no-async-promise-executor': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-wrap-multilines': 'off',
    'default-param-last': 'off',
    'react/prop-types': 'error',
    'react/function-component-definition': 'off',
  },
};
