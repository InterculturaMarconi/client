module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.css'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: 'tsconfig.json',
            },
        },
    },
    rules: {
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'import/extensions': 'off',
        'prettier/prettier': 2,
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-indent-props': ['error', 4],
        'implicit-arrow-linebreak': 'off',
        'object-curly-newline': 'off',
    },
};
