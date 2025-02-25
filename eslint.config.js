import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import boundaries from 'eslint-plugin-boundaries';
import jestDom from 'eslint-plugin-jest-dom';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import preferArrowFunctions from 'eslint-plugin-prefer-arrow-functions';
import react from 'eslint-plugin-react';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  ...compat.extends(
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ),
  {
    ignores: ['dist', 'src/api/generated'],
  },
  {
    plugins: {
      react,
      '@typescript-eslint': tseslint,
      'no-only-tests': noOnlyTests,
      'prefer-arrow-functions': preferArrowFunctions,
      'jest-dom': jestDom,
      boundaries,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detects the React version
      },
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        {
          mode: 'full',
          type: 'common',
          pattern: [
            'src/common/components/**/*',
            'src/common/hooks/**/*',
            'src/common/types/**/*',
            'src/common/utils/**/*',
            'src/common/index.ts',
          ],
        },
        {
          mode: 'full',
          type: 'features',
          capture: ['featureName'],
          pattern: ['src/features/*/**/*', 'src/features/index.ts'],
        },
        {
          mode: 'full',
          type: 'pages',
          capture: ['_', 'fileName'],
          pattern: ['src/pages/**/*', 'src/pages/index.ts'],
        },
        {
          mode: 'full',
          type: 'app',
          pattern: [
            'src/App.tsx',
            'src/index.tsx',
            'src/App.css',
            'src/env.d.ts',
            'src/i18n.ts',
            'src/locales/**/*',
          ],
        },
        {
          mode: 'full',
          type: 'api',
          pattern: [
            'src/api/**/*',
            'src/middleware.ts',
            'src/instrumentation.ts',
          ],
        },
        {
          mode: 'full',
          type: 'providers',
          pattern: ['src/providers/**/*'],
        },
        {
          mode: 'full',
          type: 'test-utils',
          pattern: ['src/test-utils/**/*'],
        },
        {
          mode: 'full',
          type: 'theme',
          pattern: ['src/theme.ts'],
        },
      ],
    },
    rules: {
      'react/prop-types': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-shadow': 'error',
      'no-shadow': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx', 'css'] }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-use-before-define': 'off',
      'no-const-assign': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-only-tests/no-only-tests': 'error',
      'prefer-arrow-functions/prefer-arrow-functions': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      'react/react-in-jsx-scope': 'off',
      'boundaries/no-unknown': ['error'],
      'boundaries/no-unknown-files': ['error'],
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: ['common'],
              allow: ['common'],
            },
            {
              from: ['features'],
              allow: [
                'common',
                ['features', { featureName: '${from.featureName}' }],
              ],
            },
            {
              from: ['pages', 'neverImport'],
              allow: ['common', 'features', 'pages'],
            },
            {
              from: ['app'],
              allow: ['app', 'pages'],
            },
          ],
        },
      ],
    },
  },
];

export default config;
