export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            boxShadow: {
                glow: '0 24px 80px rgba(39, 67, 194, 0.16)',
            },
            colors: {
                brand: {
                    pink: '#d20068',
                    blue: '#2743c2',
                    gold: '#f6b129',
                },
            },
        },
    },
    plugins: [],
}
