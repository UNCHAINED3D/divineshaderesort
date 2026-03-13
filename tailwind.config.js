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
                'serif': ['var(--font-playfair)', 'Georgia', 'serif'],
                'cormorant': ['var(--font-cormorant)', 'Georgia', 'serif'],
            },
            colors: {
                'tan-orange': '#C67D4B',
                'leaf-green': '#32CD32',
                'wood-yellow': '#F4A460',
                'resort-cream': '#FAF7F2',
                'resort-sage': '#8B9A7D',
                'resort-terracotta': '#C67D4B',
                'resort-forest': '#2D4A3E',
                'resort-sand': '#E8DFD0',
                'resort-gold': '#B8956E',
            },
        },
    },
    plugins: [],
}
