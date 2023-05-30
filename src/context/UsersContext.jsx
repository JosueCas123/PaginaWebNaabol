import { createContext, useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"

export const UserContext = createContext()

export const UsersProvider = ({children}) => {

    const {auth} = useAuth()
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        const obtenerNoticias = async() => {
  
          try {
            
            const url = 'http://10.12.100.248:8000/api/noticias/area';
            const token = localStorage.getItem('token');
      
            fetch(url, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              },
              
            })
              .then(response => response.json())
              .then((data) => {
                if (data.status === 'OK') {
                  console.log('datos registrados', data);
                  setNoticias(data.data)
                  // Realiza acciones adicionales si es necesario
                } else {
                  console.log('error!!');
                }
              })
              .catch(error => console.log(error));
  
          } catch (error) {
              console.log(error)
          }
        }
  
        obtenerNoticias()
      
      }, [auth])

      

      const guardarNoticia = async(noticia) => {
      
        try {
            const url = 'http://10.12.100.248:8000/api/noticia';
        const token = localStorage.getItem('token');
  
            fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(noticia)
            })
            .then(response => response.json())
            .then((data) => {
                if (data.status === 'OK') {
                console.log('datos registrados', data);
                // Realiza acciones adicionales si es necesario
                } else {
                console.log('error!!');
                }
            })
            .catch(error => console.log(error));
        
        } catch (error) {
            console.log(error)
        }
      
        
    };
    
    // const setEdicion = (noticia) => {
    //     setpaciente(noticia)
    //  }


    const eliminarNoticia =async (id)=> {
        console.log(id)
        const confirmar = confirm('Confimar que deseas eliminar?')
        if(confirmar){
            const urlNoticia = `http://10.12.100.248:8000/api/eliminar/noticia/${id}`
            const token = localStorage.getItem('token');
            try {
                await fetch(urlNoticia, {
                    method: 'PUT',
                    headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json'
                },
                });
            } catch (error) {
                console.log(error);
            }
        
       }
     }
 
    
        

    return(
        <UserContext.Provider value={{
            guardarNoticia,
            noticias,
            eliminarNoticia
        }}>

            {children}

        </UserContext.Provider>
    )
}
