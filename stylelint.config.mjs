/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard-scss'],
  rules: {
    'scss/at-rule-no-unknown': true,
    'block-no-empty': true,
    'color-hex-length': 'short',
    'declaration-block-no-duplicate-properties': true,
    'scss/double-slash-comment-whitespace-inside': null, // disable deprecated warning
  },
  ignoreFiles: [
    'node_modules/**',
    'out/**',
    'public/**',
    '**/dist/**',
    '**/.next/**',
    '**/*.js',   // Ignore JS files    
    '*.json',
    '*.mjs',
    '*.md'
  ],
  // Add specific files to lint SCSS/CSS files only
  files: '**.scss', // Only look at SCSS and CSS files
};
