/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './app/**/*.{js,jsx,ts,tsx}',
      './screens/**/*.{js,jsx,ts,tsx}',
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
      './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require("nativewind/preset")],
  theme: {
      extend: {
        colors:{
          blue:'#0E315D'
        }
      },
  },
  plugins: [],
};
