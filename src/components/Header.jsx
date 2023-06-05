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

            <Link
              target="_blank"
              className=" link text-white  "
              to="https://www.facebook.com/"
            >
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link target="_blank" className="link text-white">
              <i class="bx bxl-facebook"></i>
            </Link>
            <Link
              target="_blank"
              to="https://twitter.com/NaabolBolivia"
              className="link text-white"
            >
              <i class="bx bxl-twitter"></i>
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/channel/UC8BzYgsshRMTBmheyYs3lSQ/videos "
              className="link text-white"
            >
              <i class="bx bxl-youtube"></i>
            </Link>
            <Link
              to="https://www.tiktok.com/@naabolbolivia"
              target="_blank"
              className="link text-white"
            >
              <i class="bx bxl-tiktok"></i>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
