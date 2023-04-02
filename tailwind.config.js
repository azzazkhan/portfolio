/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['pages/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'layouts/**/*.{ts,tsx}'],
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
