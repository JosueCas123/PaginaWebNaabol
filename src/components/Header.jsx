import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="bg-blue-950 w-full h-16 ">
        <nav className=" flex justify-between items-center  w-10/12 h-full  mx-auto max-w-screen-2xl ">
          <div className=" object-none ">
            <Link to="/HomeNaabol">
              <img
                className="hidden sm:flex w-20"
                src="../src/img/logoA.png"
                alt=""
              />
            </Link>
          </div>

          <div className="text-center space-x-4  text-ls">
            <Link className="Link " to="/SobreNosotros">
              Sobre nosotros
            </Link>

            <Link className="Link" to="/Noticias">
              Noticias
            </Link>
            <Link className="Link" to="/Login">
              Iniciar Secion
            </Link>

            <Link className=" link text-white  " to="https://www.facebook.com/">
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link className="link text-white">
              <i class="bx bxl-facebook"></i>
            </Link>
            <Link className="link text-white">
              <i class="bx bxl-twitter"></i>
            </Link>
            <Link className="link text-white">
              <i class="bx bxl-youtube"></i>
            </Link>
            <Link className="link text-white">
              <i class="bx bxl-tiktok"></i>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
