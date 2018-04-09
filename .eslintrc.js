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
    'react/jsx-filename-extension': "off",
    'no-underscore-dangle': "off"
  }
};
