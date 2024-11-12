import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslint.configs.recommended, // turns off rules that conflict with prettier
  eslintPluginPrettier.configs.recommended, // runs prettier as an eslint rule
  {rules: {
    "react/react-in-jsx-scope": "off"}
  },
  {extends: [
    "eslint:recommended", 
    "plugin:react/recommended", 
    "plugin:prettier/recommended"]
  }
];