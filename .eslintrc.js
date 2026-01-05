// eslint-disable-next-line import/no-extraneous-dependencies
const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('eslint', {
  rules: {
    // Temporarily update the 'indent', 'template-curly-spacing' and
    // 'no-multiple-empty-lines' rules since they are causing eslint
    // to fail for no apparent reason since upgrading
    // @openedx/frontend-build from v3 to v5:
    // - TypeError: Cannot read property 'range' of null
    indent: 'off',
    'template-curly-spacing': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'htmlFor',
        depth: 25,
      },
    ],
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index'],
        pathGroups: [
          {
            pattern: '@(react|react-dom|react-redux)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'function-paren-newline': 'off',
    'spaced-comment': ['error', 'always', { block: { exceptions: ['*'] } }],
    'linebreak-style': 'off',
    'react/jsx-indent': 'off',
    'no-trailing-spaces': 'off',
    quotes: 'off',
    'react/jsx-wrap-multilines': 'off',
  },
});
