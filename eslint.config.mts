// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import i18next from 'eslint-plugin-i18next';
import path from 'path';
export default defineConfig([
  {
    plugins: {
      i18next: i18next
    },
    rules: {
      ...i18next.configs.recommended.rules
    },
  },
  
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node, //Глобальные настройки для node (__dirname), нужно для конфигов
        ...globals.browser, //Глоабльные настройки браузера (базовые - window, document)
        ...globals.jest, //Глобальная настройка jest для того, чтобы не пришлось импортировать в каждый файл describe, test и прочее
      },
      parser: tseslint.parser, //Парсер для ts (уже есть, но явно указали)
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        tsconfigRootDir: path.resolve(__dirname),
        sourceType: "module", //Поддержка import/export
        ecmaVersion: "latest", //Самая последняя версия ECMAScript
      },
    },
  },
  js.configs.recommended, //Рекомендованные настройки под js
  tseslint.configs.recommended, //Рекомендованные настройки под ts
  pluginReact.configs.flat.recommended, //Рекомендованные настройки под react
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "react/react-in-jsx-scope": "off",
      "no-compare-neg-zero": "error",
      "no-const-assign": "error",
      "no-constant-binary-expression": "warn",
      "no-constant-condition": "warn",
      "no-dupe-args": "warn",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "warn",
      "no-duplicate-imports": "warn",
      "no-template-curly-in-string": "warn",
      "no-unassigned-vars": "warn",
      "no-unreachable": "error",
      "no-unreachable-loop": "warn",
      "no-unsafe-negation": "warn",
      "no-unsafe-optional-chaining": "warn",
      "no-use-before-define": "error",
      eqeqeq: "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "prefer-const": "warn",
      "no-var": "error",
      "react/display-name": "warn",
    },
  },
  {
    files: ["**/src/**/*.test.{ts,tsx,js,jsx}"],
    rules: {
      "i18next/no-literal-string": "off",
    }
  }
]);
