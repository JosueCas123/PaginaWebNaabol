import React, { createContext, useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'

export const RecursosHContext = createContext()

export const RecursoProvider = ({children}) => {

    const {auth} = useAuth()
    console.log(auth)
    const [noticias, setNoticias] = useState([])
    const [noticia, setNoticia] = useState({})
    const [dataNoticia, setDataNoticia] = useState([])


    console.log(dataNoticia)
    console.log(noticias)


    useEffect(() => {
        const obtenerNoticias = async() => {

          try {

            const url = 'http://10.12.100.30:8000/api/noticias_area';
            const token = localStorage.getItem('token');

             const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },

            })
            const {data} = await response.json()

           console.log(data)

             setNoticias(data)

          } catch (error) {
              console.log(error)
          }
        }

        obtenerNoticias()

      }, [auth])



    useEffect(() => {
        const obtenerNoticias = async() => {

          try {

            const url = 'http://10.12.100.30:8000/api/noticias';
          
             const response = await fetch(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              },

            })
            const {data} = await response.json()

          console.log(data)

          setDataNoticia(data)

          } catch (error) {
              console.log(error)
          }
        }

        obtenerNoticias()

      }, [])


      const guardarNoticia = async(noticia, id) => {

        if (id) {
          const urlEdit = `http://10.12.100.30:8000/api/noticia_update/${id}`
            const token = localStorage.getItem('token');
            try {
              const response = await fetch(urlEdit, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noticia)
                })
                const data = await response.json()

                console.log(data.noticia)

                const noticiaActualizada = noticias.map(noticiaState => noticiaState.id === data.id ? data : noticiaState)
                setNoticias(noticiaActualizada)
                //console.log(data)

            } catch (error) {
                console.log(error);
            }

        }else{
          try {
              const url = 'http://10.12.100.30:8000/api/noticia_create';
          const token = localStorage.getItem('token');
  
             const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(noticia)
              })
  
              const data = await response.json()
              console.log(data)
              const {multimedia_id, ...NoticiasAlmacenadas} = data.noticia
              console.log(NoticiasAlmacenadas)
              setNoticias([...noticias, NoticiasAlmacenadas])
  
          } catch (error) {
              console.log(error)
          }
        }
      };

      /* cargos naabol */
      const guardarCargos = async(noticia, id) => {

        if (id) {
          const urlEdit = `http://10.12.100.30:8000/api/noticia_update/${id}`
            const token = localStorage.getItem('token');
            try {
              const response = await fetch(urlEdit, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(noticia)
                })
                const data = await response.json()

                console.log(data.noticia)

                const noticiaActualizada = noticias.map(noticiaState => noticiaState.id === data.id ? data : noticiaState)
                setNoticias(noticiaActualizada)
                //console.log(data)

            } catch (error) {
                console.log(error);
            }

        }else{
          try {
              const url = 'http://10.12.100.30:8000/api/noticia_create';
          const token = localStorage.getItem('token');
  
             const response = await fetch(url, {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(noticia)
              })
  
              const data = await response.json()
              console.log(data)
              const {multimedia_id, ...NoticiasAlmacenadas} = data.noticia
              console.log(NoticiasAlmacenadas)
              setNoticias([...noticias, NoticiasAlmacenadas])
  
          } catch (error) {
              console.log(error)
          }
        }
      };


    const setEdicion = (noticia) => {
      console.log(noticia)
      setNoticia(noticia)
     }


    const eliminarNoticia =async ({id})=> {
        console.log(id)
        const confirmar = confirm('Confimar que deseas eliminar?')
        if(confirmar){
            const urlNoticia = `http://10.12.100.30:8000/api/noticia_delete/${id}`
            const token = localStorage.getItem('token');
            try {
               const response = await fetch(urlNoticia, {
                    method: 'PUT',
                    headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json'
                },
                });
                const data = await response.json()

                const noticiasAtualizados = noticias.filter(noticia => noticia.id !== id)
                setNoticias(noticiasAtualizados)
                //console.log(data)

            } catch (error) {
                console.log(error);
            }

       }
     }


  return (
    <RecursosHContext.Provider value={{
        noticias,
            setNoticias,
            guardarNoticia,
            eliminarNoticia,
            setEdicion,
            dataNoticia,
            noticia,
            
    }}>
        {children}
    </RecursosHContext.Provider>
  )
}
