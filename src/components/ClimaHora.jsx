import React, { useEffect, useState } from 'react';

export const ClimaHora = () => {
  const [climaData, setClimaData] = useState([]);

  useEffect(() => {
    mostrarClimaCiudades();
  }, []);

  const mostrarClimaCiudades = async () => {
    const ciudadesClima = ['La Paz', 'Cochabamba', 'Santa Cruz', 'Beni'];
    const key = '2b305071c0ccb4ae2006870be1a1a3d5';

    const climaData = await Promise.all(
      ciudadesClima.map(async (ciudad) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},Bolivia&appid=${key}`;
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        console.log(data.weather[0].icon)
        return data;
      })
    );

    setClimaData(climaData);
  };

  return (
    <>
      {climaData.map((data, index) => (
          
        <div
          key={index}
          className="w-52 h-16 bg-neutral-800 rounded-3xl flex justify-around items-center text-xl shadow-inner m-3 sm:w-72 sm:h-20 sm:text-2xl lg:"
        >
          <div className="flex items-center">
            <p className="text-sm">{data.name}</p>
          </div>
          <div className="flex justify-between items-center ">
            <p className="mx-3 sm:mx-5">{parseInt(data.main.temp - 273.15)} °C</p>
            <img className="mx-4 sm:mx-5" src={`https://api.openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};