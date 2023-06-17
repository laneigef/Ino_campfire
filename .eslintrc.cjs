module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      jquery: true,
    },
    extends: [
      "eslint:recommended",
      "prettier",
    ],
    rules: {},
    parserOptions: {
      sourceType: "module",
      ecmaVersion: 2015,
    },
};
