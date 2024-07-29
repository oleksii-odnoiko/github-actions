module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', ['upper-case', 'pascal-case', 'start-case']],
    'type-case': [2, 'always', 'lower-case'],
    'include-ticket-ref-in-scope': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'include-ticket-ref-in-scope': (parsed) => {
          const { scope } = parsed;
          const jiraRefTemplate = /HN-\d{1,}/;
          if (!scope || !scope.match(jiraRefTemplate)) {
            return [
              false,
              `No ticket reference provided, please write message in format: '<type>(HN-XX): <message>'`,
            ];
          }
          return [true, ''];
        },
      },
    },
  ],
};
