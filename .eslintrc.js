module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    project: ['./tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['simple-import-sort', 'unused-imports', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    'prettier/prettier': ['warn'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'never', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true },
    ],
    'spaced-comment': ['warn', 'always', { exceptions: ['-', '*'] }],
    '@typescript-eslint/no-empty-function': [
      'error',
      { 'allow': ['constructors', 'arrowFunctions'] }
    ],
    'simple-import-sort/sort': 'error',
    'unused-imports/no-unused-imports-ts': 'error',
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  'overrides': [
    {
      "files": ["*.ts"],
      "rules": {
        "@typescript-eslint/explicit-function-return-type": [
          "error",
          { allowExpressions: true }
        ]
      }
    }
  ]
};
