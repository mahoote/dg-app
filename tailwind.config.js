/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
const generateFontStyles = require('./src/utils/fontStyles')

module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        colors: {
            white: '#ffffff',
            black: '#000000',
            foreground: '#E8E8EA',
            background: '#030323',
            accent: '#9B809B',
            primary: {
                50: '#f8f7fb',
                100: '#f2f1f6',
                200: '#e5e4f0',
                300: '#d1cfe3',
                400: '#b0aacd',
                500: '#9d93bf',
                600: '#897aad',
                700: '#77679a',
                800: '#645681',
                900: '#52486a',
                950: '#352e47',
            },
            secondary: {
                50: '#f0f1fd',
                100: '#e4e6fb',
                200: '#ced0f7',
                300: '#b0b2f1',
                400: '#9490e9',
                500: '#8275df',
                600: '#715ad1',
                700: '#614ab8',
                800: '#503e95',
                900: '#443978',
                950: '#282145',
            },
            avatar: {
                1: '#7BA4DB',
                2: '#9DB4A8',
                3: '#E6E18D',
                4: '#E7A9A9',
                5: '#B5A3D0',
                6: '#F3B08C',
            },
        },
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            const utilities = generateFontStyles()
            addUtilities(utilities, ['responsive'])
        }),
    ],
}
