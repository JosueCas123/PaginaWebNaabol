import React, { useState } from 'react';
import Modal from 'react-modal'
import '../components/style.css'



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement('#root');
export const AppModal = ()  => {

  const [isOpen, setIsOpen] = useState(true)
  
 


    const onCloseModal = () => {
        console.log('adsd')
        setIsOpen(false)
    }
   


  return (
   
      <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
      >

        <h1>Hla Mundo</h1>
        <br />

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab doloribus dolor alias dolorum velit, reiciendis deleniti voluptatum atque saepe? Et laborum reprehenderit labore facere consectetur ea quod dolorum reiciendis inventore.</p>
      </Modal>
  
  );
}

