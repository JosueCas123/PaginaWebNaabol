import React, { useEffect, useState } from 'react'

export const useClimaApp = () => {

    const [climaUsuario, setClimaUsuario] = useState(null);
    const [climaCiudades, setClimaCiudades] = useState([]);
  
    useEffect(() => {
      
      mostrarClimaCiudes();
    }, []);
  
    // const obtenerLatitudLongitud = () => {
    //   if ('geolocation' in navigator) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //       const latitud = position.coords.latitude;
    //       const longitud = position.coords.longitude;
    //       obtenerClimaHora(latitud, longitud);
    //     });
    //   } else {
    //     console.log('Hubo un error');
    //   }
    // };
  
    // const obtenerClimaHora = async (latitud, longitud) => {
    //   const key = '2b305071c0ccb4ae2006870be1a1a3d5';
    //   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${key}`;
  
    //   try {
    //     const respuesta = await fetch(url);
    //     const data = await respuesta.json();
  
    //     if (data.cod === '404') {
    //       console.log('Error de ubicación');
    //       return;
    //     }
  
    //     mostrarClima(data);
    //   } catch (error) {
    //     console.log('Hubo un error en la solicitud');
    //   }
    // };
  
    // const mostrarClima = data => {
    //   const { name, weather, main: { temp, temp_max, temp_min } } = data;
  
    //   // Resto del código para mostrar el clima actual
  
    // //   const climaUsuarioElemento = (
    // //     <div>
    // //       {/* Renderizar el contenido del clima del usuario aquí */}
    // //     </div>
    // //   );
  
    //   setClimaUsuario(climaUsuarioElemento);
    // };
  
    const mostrarClimaCiudes = async () => {
      const cuidadesClima = ['La Paz', 'Cochabamba', 'Santa Cruz', 'Beni'];
      const key = '2b305071c0ccb4ae2006870be1a1a3d5';
  
      try {
        const promesasClima = cuidadesClima.map(async ciudad => {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},Bolivia&appid=${key}`;
          const respuesta = await fetch(url);
          const data = await respuesta.json();
  
          return data;
        });
        setClimaCiudades(data);
  
        const resultadosClima = await Promise.all(promesasClima);
  
      } catch (error) {
        console.log('Hubo un error en la solicitud');
      }
    };
  


  return {
    climaCiudades,
  }
}
