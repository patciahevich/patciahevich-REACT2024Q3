module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    "@typescript-eslint/no-explicit-any": "error",
    "implicit-arrow-linebreak": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      { 
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ]
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },

    'import/resolver': {
      alias: {
        map: [
          ['', './public']
        ],
        extensions: ['.ts', '.tsx', ".js", ".jsx",]
      }
    }
  }
}
