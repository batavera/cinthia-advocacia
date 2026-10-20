/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                onyx: {
                    950: '#070709',
                    900: '#0A0A0C',
                    850: '#111116',
                    800: '#17171E',
                    700: '#22222C',
                },
                gold: {
                    300: '#FFE8A3',
                    400: '#E5C158',
                    500: '#D4AF37',
                    600: '#B89320',
                    700: '#997517',
                }
            },
            fontFamily: {
                cinzel: ['Cinzel', 'serif'],
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}