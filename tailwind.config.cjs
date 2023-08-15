/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {}
    },
    safelist: [
        {
            pattern: /text-(base|xl|2xl|3xl|4xl|5xl|6xl)/,
        },
    ],
    plugins: []
};
