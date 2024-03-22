/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,ts,jsx,tsx,mdx}" ],
  theme: {
    extend: {
      backgroundImage: {
        'homepage_background': "url('/images/background.jpg')",
        'tractor': "url('/images/tractor.svg)"
      },   
      colors: {
        "action-color": "#00DFDC",
        "primary-color-1": "#6E4836",
        "primary-color-2": "#5F4132",
        "base-color-1": "#918172",
        "base-color-2": "#6B5E50",        
      },
    },
  },
  plugins: [],
}

