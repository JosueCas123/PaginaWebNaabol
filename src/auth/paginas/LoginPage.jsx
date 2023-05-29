import React, { useState } from 'react'
import { useForm } from '../../hooks/useFom'
import { Alerta } from '../../components/Alerta'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const navigate = useNavigate()
    const [usuario, setUsuario] = useState('')
    const [contraseña, setContraseña] = useState('')
    const [alerta, setAlerta] = useState({})
    
    const handleSubmit = async(e) => {
        console.log('enviado')
        e.preventDefault();
        console.log({usuario,contraseña})
        if ([usuario, contraseña].includes('')) {
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
            const url = 'http://10.12.100.252:8000/api/login'
            
            const data = await fetch(url,{

                method: 'POST',
                body: JSON.stringify({ usuario, contraseña }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            console.log(data)
            localStorage.setItem('token', data.token)
            navigate('/Administrador')
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
                                    value={contraseña} 
                                    onChange={e => setContraseña(e.target.value)}
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
