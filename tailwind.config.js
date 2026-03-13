/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'runtime': ['RuntimeRegular', 'sans-serif'],
            },
            colors: {
                'tan-orange': '#CD853F',
                'leaf-green': '#32CD32',
                'wood-yellow': '#F4A460',
            },
        },
    },
    plugins: [],
}