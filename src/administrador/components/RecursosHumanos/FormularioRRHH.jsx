import React, { useState, useEffect, useMemo } from 'react'
import useUser from '../../../hooks/useUser';
import { Alerta } from '../../../components/Alerta';


import { CardInfo } from './CardInfo';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HeaderAdmin } from './HeaderAdmin';

import useRecHumanos from '../../../hooks/useRecHumanos';
import { Sibear } from '../Sibear';

export const FormularioRRHH = () => {

    const [nombre, setNombre] = useState('');
    const [cargo, setCargo] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [alerta, setAlerta] = useState({})
    const {userInfo} = useAuth()

    const [id, setId] = useState(null)
    const {guardarNoticia, noticia} = useRecHumanos()





    useEffect(() => {

        if (noticia?.nombre) {
                setNombre(noticia.nombre)
                setCargo(noticia.cargo)
                setSelectValue(noticia.selectValue)
                setId(noticia.id)
               
               
               
        }
      
    }, [noticia])
    

    const handleSubmit = (e) =>{

        e.preventDefault()
  
  
        
        if (nombre === '' || cargo === '' || selectValue === '') {
          setAlerta({
            msg: 'todos los campos son obligatorios',
            error: true
          })
          console.log('saddasd')
      
          setTimeout(() => {
              setAlerta({
                
                  error:false
              })
          },3000)
          
          return;
          
        }
  
        
        const imagenInput = document.querySelector('#imagen');
    
        const imagen = imagenInput.files[0];
        
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64Image = reader.result;
    
          const info = {
            titulo: nombre,
            descripcion: cargo,
            imagen: base64Image,
            prioridad: selectValue
          };
          console.log(info)
         // console.log(base64)
  
         guardarNoticia(info, id)
         setAlerta({
            msg:"Gurdado correctamente"
         })
          
         setTimeout(() => {
            setAlerta({
              
                msg:""
            })
        },3000)

    
        }
        reader.readAsDataURL(imagen);
          
        setNombre('')
        setCargo('')
        setSelectValue('')
        imagenInput.value = ''
      }

      const {msg} = alerta
  return (

    <>
        {/**componente header  */}
        <HeaderAdmin/>
         {/**componente Sibear  */}
    
         <Sibear/>

         <CardInfo/>
        <div style={{ overflowX: 'auto' }} className='w-3/5 shadow-lgflex flex-col justify-center items-center content  transform ease-in-out duration-500 ml-20 p-5 xl:ml-72 xl:mt-20  shadow-xl  lx:p-16'>
        <h2 className=" font-extrabold xl:text-xl  ">Nueva </h2>

        <form onSubmit={handleSubmit}>
                <div class="mb-4">
                    <label class="text-xl  font-medium mt-10">nombre<span class="text-red-500">*</span></label>
                    <input 
                        type="text" 
                        class="border-2 border-gray-300 p-2 w-full " 
                        placeholder='Ingrese un nombre'
                        name="nombre" 
                        value={nombre}
                        onChange={e => setNombre( e.target.value)}
                        id="title" 
                        
                    />
                </div>

                <div class=" md:flex md:justify-between p-1 space-x-9">
                    <div>
                            <label className='md:text-lg mr-3 font-medium' for=""> Imegen</label>
                            <input 
                            id="imagen" 
                            type="file" 
                            class="input "
                            required
                            />
                    </div>
                        <div>
                            <label className='text-lg font-medium mr-3' htmlFor="">Regional</label>
                            <select 
                                class="border-2 border-gray-300 border-r p-2" 
                                value={selectValue}
                                onChange={e => setSelectValue( e.target.value)}
                            >
                                 <option value="" selected disabled>Seleccionar opción</option>
                                 <option value="1">Regional General Nacional</option>
                                 <option value="2">Regional Santa Cruz</option>
                                 <option value="3">Regional La Paz</option>
               
                
                        </select>
                    </div>
                </div>
                <div class="mb-4 flex flex-col">
                    <label class="text-lg font-medium mr-3">Cargo</label>
                    <textarea 
                        name="content" 
                        class="border-2 border-gray-500"
                        placeholder='Ingrese una descripcion'
                        value={cargo}
                        onChange={e => setCargo( e.target.value)}
                    >

                    </textarea> 
                </div>

                <div className="flex flex-row justify-between">
                    <div >
                        <input 
                            type='submit' 
                            className="p-3 bg-blue-500 text-white cursor-pointer hover:bg-blue-400"
                            value={id ? 'Guardar Cambios' : 'Agregar Noticia Nueva'}
                        />
                    </div>
                    <div>
                        <Link
                            to='/Administrador'
                        >
                            <button
                            
                                className="p-3 bg-blue-500 text-white cursor-pointer hover:bg-blue-400"
                            >
                                Regresar atras
                            </button>
                        </Link>
                    </div>
                </div>
                

        </form>
        {
        msg && <Alerta alerta={alerta}/>
        }
    </div>
    </>
  )
}