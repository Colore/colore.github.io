import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['selector', '[data-mode="dark"]'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'delay-100': '0.1'
            },
            backgroundImage: {
                'menu-hover': 'url("/assets/images/menu_hover.png")'
            },
            boxShadow: {
                content: '12px 0 15px -4px rgba(128, 128, 128, 0.8), -12px 0 8px -4px rgba(128, 128, 128, 0.8)'
            },
            colors: {
                colore: '#789160'
            }
        }
    },
    plugins: [],
    variants: {
        outline: ['focus']
    }
}

export default config
