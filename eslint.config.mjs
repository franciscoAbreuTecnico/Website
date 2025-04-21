import js from '@eslint/js'
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next', 'prettier', 'eslint:recommended', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
    ignorePatterns: ['node_modules',
      '.next',
      '.prettierignore',
      '*.log',
      'out',
      'public',
      '*.json',
      '*.config.*'
    ]
  }),
];

export default eslintConfig