module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:astro/jsx-a11y-recommended',
    // Prettier 규칙을 가장 마지막에 추가하여 다른 규칙들을 덮어쓰게 합니다.
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // 이곳에 Astro 관련 규칙을 추가할 수 있습니다.
      },
    },
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        // 함수가 50라인을 초과하면 경고를 표시합니다. (주석, 빈 줄 제외)
        'max-lines-per-function': [
          'warn',
          { max: 50, skipBlankLines: true, skipComments: true },
        ],
      },
    }
  ],
};