module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["prettier"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  rules: {},
};
