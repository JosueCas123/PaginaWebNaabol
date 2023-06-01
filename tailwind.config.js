/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        HomeImg: "url('./src/img/ImagenHome.jpg')",
        HomeNaabol: "url('./src/img/Naabol1.jpg')",
        HomeNosotros: "url('./src/img/nosotros.jpg')",
        Noticia: "url('./src/img/Noticia1.png')",
        Director: "url('./src/img/Director.png')",
        Aeropuerto: "url('./src/img/fondo1.jpg')",
        Login: "url('./src/img/LoginImg.jpg')",
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
