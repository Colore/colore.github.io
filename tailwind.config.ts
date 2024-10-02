import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['selector', '[data-mode="dark"]'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            // you can configure the container to be centered
            center: true,

            // or have default horizontal padding
            padding: '1rem',

            // default breakpoints but with 40px removed
            screens: {
                'sm': '600px',
                'md': '728px',
                'lg': '984px',
                'xl': '1240px',
                '2xl': '1496px'
            }
        },

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
    plugins: []
}

export default config
