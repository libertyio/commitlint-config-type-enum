// copy types from src/main.js:
const types = [
    'add',
    'build',
    'ci',
    'doc',
    'fix',
    'improve',
    'perf',
    'refactor',
    'revert',
    'style',
    'test',
];

// commitlint rules for this repository:
const rules = {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
        2,
        'never',
        ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
};

module.exports = { rules };
