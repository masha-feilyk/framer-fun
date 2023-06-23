module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'next/core-web-vitals'
  ],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'off',
    'no-var': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^react', '^@?\\w'],
          ['^@?\\w'],
          ['^\\.'],
          ['^.+\\.?(css)$']
        ]
      }
    ]
  },
  globals: {
    JSX: true
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'prettier',
    'react'
  ]
}
