import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    ignores: ["dist/**"], // <--- игнорируем папку dist
  },
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"], // 🔥 добавь это
        },
        ecmaVersion: 2022,
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-target-blank": ["error", { allowReferrer: true }],
    },
  },
]);
