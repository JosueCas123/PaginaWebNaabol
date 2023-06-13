import React, { useState } from 'react';
import Modal from 'react-modal'
import '../components/style.css'
import { Alerta } from '../../components/Alerta';
import useUser from '../../hooks/useUser';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-70%, 18%)',
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
export const AppModal = ()  => {

  const [isOpen, setIsOpen] = useState(true)
  const {guardarNoticia} = useUser()
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [alerta, setAlerta] = useState({})

    const handleSubmit = (e) =>{

      e.preventDefault()


      
      if (titulo === '' || descripcion === '' || selectValue === '') {
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
          titulo: titulo,
          descripcion: descripcion,
          imagen: base64Image,
          prioridad: selectValue
        };
        console.log(info)
       // console.log(base64)

        setAlerta({})
        guardarNoticia(info)
        
  
      }
      reader.readAsDataURL(imagen);
        
      setTitulo('')
      setDescripcion('')
      setSelectValue('')
      imagenInput.value = ''
    }

  const {msg} = alerta

    const onCloseModal = () => {
        console.log('adsd')
        setIsOpen(false)
    }
   


  return (
   
        <div>
          <h2>Nueva Noticia</h2>
          <form onSubmit={handleSubmit}>
                    <div class="mb-4">
                        <label class="text-xl text-gray-600">Title <span class="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          class="border-2 border-gray-300 p-2 w-full" 
                          name="titulo" 
                          value={titulo}
                          onChange={e => setTitulo( e.target.value)}
                          id="title" 
                          
                        />
                    </div>

                    <div class="flex  p-1">
                        <div>
                              <label for=""> Imegen</label>
                              <input 
                                id="imagen" 
                                type="file" 
                                class="input"
                                required
                              />
                        </div>
                          <div>
                              <label  htmlFor="">Priorida</label>
                              <select 
                                class="border-2 border-gray-300 border-r p-2" 
                                value={selectValue}
                                onChange={e => setSelectValue( e.target.value)}
                              >
                                    <option value="" selected disabled>Seleccionar opción</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                              </select>
                          </div>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label class="text-xl text-gray-600">Description</label>
                        <textarea 
                          name="content" 
                          class="border-2 border-gray-500"
                          value={descripcion}
                          onChange={e => setDescripcion( e.target.value)}
                        >

                        </textarea> 
                    </div>

                    <input 
                      type='submit' 
                      class="p-3 bg-blue-500 text-white cursor-pointer hover:bg-blue-400"
                      value='Enviar'
                    />
                    

            </form>
          {
            msg && <Alerta alerta={alerta}/>
          }
        </div>
      
  
  );
}
