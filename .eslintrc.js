module.exports = {
  env: {
    browser: true,
    commonjs: true,
    jest: true,
    node: true,
  },
  // globals: {
  //   JSX: true,
  // },
  extends: ["plugin:@docusaurus/recommended"],
  overrides: [],
  parserOptions: {
    parser: "babel-eslint",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-hooks", "react", "@docusaurus"],
  rules: {
    "@docusaurus/no-html-links": "OFF",
    "@docusaurus/prefer-docusaurus-heading": "OFF",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
