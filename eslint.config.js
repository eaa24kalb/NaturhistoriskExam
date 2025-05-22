// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // Automatically detect your React version
      },
    },
    rules: {
      // JavaScript base rules
      ...js.configs.recommended.rules,

      // React recommended rules
      ...pluginReact.configs.recommended.rules,

      // Custom overrides (recommended for React 17+)
      "react/react-in-jsx-scope": "off",
    },
  },
]);
