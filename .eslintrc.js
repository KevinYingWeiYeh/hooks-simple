module.exports = {
  "env": {
      "browser": true,
      "es6": true,
      "node": true
  },
  "extends": "eslint:recommended",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "jsx-a11y",
      "import"
  ],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "indent": ["error",2],
    "react/jsx-filename-extension": 0,
    "semi": 0,
    "react/jsx-indent": 0,
    "jsx-a11y/img-redundant-alt": 0
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
};
