/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d111c',
        semiBlack: 'rgb(19, 19, 19)',
        gray: 'rgb(155, 155, 155)',
        label: 'rgb(125, 125, 125)',
        input: 'rgb(34, 34, 34)',
        inputWrapper: 'rgb(27, 27, 27)',
        inputPlaceholder: 'rgb(94, 94, 94)',
        button: 'rgb(252, 114, 255)',
        buttonSelectHover: 'rgb(240, 114, 255)',
        currencyHover: 'rgb(65, 65, 65)',
        buttonSwap: 'rgb(49, 28, 49)',
        buttonSwapHover: 'rgb(56, 37, 56)'
      },
      borderColor: {
        whiteOpacity7: 'rgb(255, 255, 255, 0.07)',
        button: 'rgb(252, 114, 255)'
      },
      boxShadow: {
        swapWrapper: 'rgba(252, 114, 255, 0.08) 0px 0px 10px 0px, rgba(252, 114, 255, 0.18) 0px 40px 120px 0px'
      },
      padding: {
        swapWrapper: '12px 8px 8px',
        input: '16px 16px 16px 40px',
        button: '6px 10px'
      },
      fontWeight: {
        485: 'font-weight: 485',
        535: 'font-weight: 535'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
}
