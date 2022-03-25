const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {  
  mode: 'jit',
    content: [    "./pages/**/*.{js,ts,jsx,tsx}",    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      screens: {
        'xs': '280px',
        // => @media (min-width: 280px) { ... }
        ...defaultTheme.screens,
      },
    }
}
