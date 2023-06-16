import React from "react";
import { Header } from "../components/Header";
import { Foot } from "../components/Foot";
export const Navegacion = () => {
  return (
    <>
      <Header />

      <nav class="bg-blue-950 border-gray-200 ">
        <div class="max-w-screen-2xl  w-11/12 flex flex-wrap  items-center justify-between mx-auto py-4 sm:justify-center">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="  hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="  font-medium flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:fle md:space-x-8 md:mt-0 md:border-0   dark:border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  NOTAM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Meteologia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Plan de vuelo electronico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  PIB
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className=" py-8 ">
        <div className="max-w-screen-2xl w-11/12 mx-auto">
          <h2 className="font-bold text-center py-6 text-2xl sm:text-left ">
            NOTAM
          </h2>

          <iframe
            className="w-full h-96"
            src="http://181.115.145.237/ifis/iNotamMostrar.jsp"
            frameborder=""
          ></iframe>
          <h2 className="font-bold text-center py-6 text-2xl sm:text-left ">
            Informacion Meteologia
          </h2>

          <iframe
            className="w-full h-96"
            src="http://181.115.145.237/ifis/iMet.jsp"
            frameborder=""
          ></iframe>
          <h2 className="font-bold text-center py-6 text-2xl sm:text-left ">
            Plan de vuelo Electronico
          </h2>

          <iframe
            className="w-full h-96"
            src="http://181.115.145.237/ifis/eFpl.jsp"
            frameborder=""
          ></iframe>

          <h2 className="font-bold text-center py-6 text-2xl sm:text-left ">
            Plan de vuelo Electronico
          </h2>

          <iframe
            className="w-full h-96"
            src="http://181.115.145.237/iraya2011/pibVer.jsp"
            frameborder=""
          ></iframe>
        </div>
      </section>

      <Foot />
    </>
  );
};
