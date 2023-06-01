import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [cargando, setCargando] = useState(true)
    const [auth, setAuth] = useState({})

    useEffect(() => {
        const mostrarCredenciales = async () => {
          const token = localStorage.getItem('token')
          //console.log(token)
          if (!token){
              setCargando(false)
              return
          }
          try {
              const response = await fetch(url,{
                    
                body: JSON.stringify({ usuario, contraseña }),
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
              })
              const data = await response.json()
              setAuth(data)
          } catch (error) {
              console.log(error.response.data.msg)
              setAuth({})
          }
  
          setCargando(false)
        }
        mostrarCredenciales();
        
      }, [auth])
      

    return(
        <AuthContext.Provider value={{
            auth,
            setAuth,
            
        }}>
            {children}
        </AuthContext.Provider>
    )
} 