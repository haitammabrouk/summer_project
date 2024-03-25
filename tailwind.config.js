/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        
      },
      width: {
        'custom': '200px',
        'article' : '400px',
        'input' : '430px',
        'test' : '500px',
        'text' : '600px',
        'card'  : '500px',
      },
      height: {
        'customheight': '50px', // Add your custom width here
      },
      
    },
  },
  plugins: [],
}

