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

const rules = {
    'type-enum': [2, 'always', types],
};

const value = () => types;

export {
    rules,
    value,
};
