/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['pages/**/*.ts', 'pages/**/*.tsx', 'components/**/*.ts', 'components/**/*.tsx'],
    theme: {
        extend: {
            fontSize: {
                xxxs: '.5rem',
                xxs: '.625rem',
            },
        },
    },
    plugins: [],
};
