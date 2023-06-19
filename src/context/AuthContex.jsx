import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [cargando, setCargando] = useState(true)
    const [auth, setAuth] = useState({})
    const [userInfo, seUserInfo] = useState({})
    console.log(auth)
    console.log(userInfo)
    useEffect(() => {
        const mostrarCredenciales = async () => {
          const token = localStorage.getItem('token')
          
          //console.log(token)
          if (!token){
              setCargando(false)
              return
          }
          try {
            const token = localStorage.getItem('token')
            const url = 'http://127.0.0.1:8000/api/user'
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
                },
  
              })
              const {data} = await response.json()
              console.log(data)
              seUserInfo(data)
          } catch (error) {
              console.log(error.response.data.msg)
              ({})
          }
  
          setCargando(false)
        }
        mostrarCredenciales();
        
      }, [auth])
      

    return(
        <AuthContext.Provider value={{
            auth,
            setAuth,
            userInfo,
            cargando
            
        }}>
            {children}
        </AuthContext.Provider>
    )
} 