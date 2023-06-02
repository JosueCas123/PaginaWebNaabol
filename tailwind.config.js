/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        HomeImg: "url('./src/img/ImagenHome.jpg')",
        HomeNosotros: "url('./src/img/fondo2.png')",
        Noticia: "url('./src/img/Noticia1.png')",
        Director: "url('./src/img/Director.png')",
        Aeropuerto: "url('./src/img/fondo1.jpg')",
        Login: "url('./src/img/LoginImg.jpg')",
        Admi: "url('./src/img/administratico.jpg')",
        legal: "url('./src/img/legal.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        secondary: "#74b3ce",
      }),
      textColor: {
        secondary: "#74b3ce",
      },
    },
  },
  plugins: [],
};
