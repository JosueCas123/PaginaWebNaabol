import React, { useState } from 'react'
import { useForm } from '../../hooks/useFom'
import { Alerta } from '../../components/Alerta'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export const LoginPage = () => {

    const navigate = useNavigate()
    const [usuario, setUsuario] = useState('')
    const [passport, setPassport] = useState('')
    const [alerta, setAlerta] = useState({})
    const {setAuth} =  useAuth()
    
    const handleSubmit = async(e) => {
        console.log('enviado')
        e.preventDefault();
        console.log({usuario,passport})
        if ([usuario, passport].includes('')) {
            setAlerta({
              msg: 'todos los campos son obligatorios',
              error: true
            })
         
            setTimeout(() => {
                setAlerta({
                   
                    error:false
                })
            },3000)
            
            return;
            
        }
        try {
            const url = 'http://10.12.100.30:8000/api/login'
            
            try {
                console.log(JSON.stringify(usuario, passport))
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify({usuario, passport}),
                    // data puede ser string o un objeto
        
                    headers: {
                        'Content-Type': 'application/json'
                        // Y le decimos que los datos se enviaran como JSON
                    }
                });

                
                // Verificar el estado de la respuesta
                if (response.ok) {
                    // La solicitud fue exitosa (código de estado 200-299)
                    const data = await response.json();
                    // Realizar alguna acción con los datos de respuesta
                     console.log(data);
                    setAuth(data)
                    localStorage.setItem('token', data.token)
                    navigate('/Administrador');
                } else {
                    // La solicitud no fue exitosa
                    console.log('Error en la solicitud:', response.status);
                }
            } catch (error) {
                console.log(error);
            }
            
            
        } catch (error) {
            console.log(error)
        }

    }
    const {msg} = alerta
  return (
    <>
        <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat bg-Login">
            <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                         <img src="../src/img/logoA.png" width="100" alt="" srcset="" />
                         <Link to="/" className = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                        <svg className = "w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Home
                    </Link>
                         <h1 className="mb-2 text-xl">Iniciar Secion</h1>
                    </div>
                            <form  onSubmit={handleSubmit} >
                                <div className="mb-4 text-lg">
                                <input 
                                    className="w-full rounded-xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" 
                                    value={usuario}
                                    onChange={e => setUsuario(e.target.value)} 
                                    placeholder="ingrese su usuario" />
                                </div>

                                <div className="mb-4 text-lg">
                                <input 
                                    className="w-full rounded-xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" 
                                    value={passport} 
                                    onChange={e => setPassport(e.target.value)}
                                    placeholder="Ingrese Contraseña" />
                                </div>
                                <div className="mt-8 flex justify-center text-lg text-black">
                                <button type="submit" className="rounded-3xl bg-blue-700 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-900">Login</button>
                                </div>
                            </form>
                {
                    msg && <Alerta alerta={alerta}/>
                }
            </div>
        </div>
    
    </div>
    </>
  )
  }
