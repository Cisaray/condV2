/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            lg: {max: '1199.99px'},
            md: {max: '991.99px'},
            sm: {max: '767.99px'},
            xs: {max: '479.99px'},
        },
        extend: {
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
            },
            backgroundImage: {
                mainBg: '#f0e5d1',
                firstBgImg: 'url(../public/assets/bg1.jpg)'
            },
            rotate: {
                '270': '270deg'
            }
        },
    },
    plugins: [],
}

