/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HomeImg': "url('./src/img/ImagenHome.jpg')",
        'Noticia': "url('./src/img/Noticia1.png')",
        'Director': "url('./src/img/Director.png')",
        'Login': "url('./src/img/LoginImg.jpg')",
			  
      },
      backgroundColor: theme =>({
				...theme('colors'),
        'secondary': '#74b3ce',
				
			}),
			textColor:{
        'secondary': '#74b3ce',
				
				
			},
    },
  },
  plugins: [],
}

