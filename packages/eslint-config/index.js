module.exports = {
    env: {
      node: true,
      browser: true
    },
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    extends: [
      'airbnb',
    ],
    rules: {
      'react/jsx-filename-extension': 0,
      'import/no-absolute-path': 0,
      'import/extensions': 0,
      'no-underscore-dangle': [
        'error',
        {
          allow: [
            '_id',
            '_ensureIndex'
          ]
        }
      ],
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: false
        }
      ],
      'space-before-function-paren': 0,
      'func-names': 0,
      'prefer-arrow-callback': 0
    }
  };