import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['package-lock.json', 'playwright-report/**', 'test-results/**'],
  },
  {
    files: ['**/*.ts'],
    plugins: { js: pluginJs },
    extends: ['plugin:js/recommended', ...tseslint.configs.recommended],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
      },
    },
    rules: {
      'no-console': 'error',
    },
  },
]);
