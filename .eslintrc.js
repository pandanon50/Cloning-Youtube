module.exports = {
    env: {
        es2020: true,
        node: true,
    },
    extends: ['airbnb-base', 'eslint:recommended', 'eslint-config-prettier'],
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    rules: { 'no-console': 'off' },
};
