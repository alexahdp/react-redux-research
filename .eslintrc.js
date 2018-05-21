module.exports = {
  extends: [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true
  },
  globals: {
    "it": true,
    "describe": true
  },
  "plugins": [
    "react",
    "flowtype"
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/aria-role': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-underscore-dangle': 'off',
    'brace-style': ['error', 'stroustrup'],
  }
};
