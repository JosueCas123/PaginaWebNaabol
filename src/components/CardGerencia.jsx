import React from "react";

export const CardGerencia = () => {
  return (
    <div className="p-6" id="Direccion_General">
      <p className="text-xl font-semibold text-slate-700">Direccion General</p>
      <div className="w-auto h-48 items-center mt-1 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-hidden">
        <div className="Card_Naabol flex justify-center items-center">
          <div className="w-20 h-20">
              <img className="w-20 h-20 mr-3 bg-cover bg-center rounded-full" src="../src/img/3.jpg" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Director Ejecutivo</p>
            <p className="items-center">Elmer Pozo Olivera</p>
          </div>
        </div>
        <div className="Card_Naabol flex justify-center items-center">
          <div className="w-20 h-20">
              <img className="w-20 h-20 mr-3 bg-cover bg-center rounded-full" src="../src/img/1.jpg" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Director Ejecutivo</p>
            <p className="items-center">Elmer Pozo Olivera</p>
          </div>
        </div>
        <div className="Card_Naabol flex justify-center items-center">
          <div className="w-20 h-20">
              <img className="w-20 h-20 mr-3 bg-cover bg-center rounded-full" src="../src/img/2.jpg" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-xl">Director Ejecutivo</p>
            <p className="items-center">Elmer Pozo Olivera</p>
          </div>
        </div>
      </div>
    </div>
  );
};
