module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  settings: {
    react: { version: '18.2' },
    'jsx-a11y': {
      polymorphicPropName: 'as',
      components: {
        CityInput: 'input',
        CustomButton: 'button',
        MyButton: 'button',
        RoundButton: 'button',
      },
    },
  },
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
  },
};
