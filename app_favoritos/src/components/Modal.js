import React from 'react';
import BtnCerrarModal from './BtnCerrarModal';


const Modal = ({children,estado,cambiarEstado,titulo,descrip})=>{
    //var height = document.getElementsByName("body").height();
    // document.getElementsByClassName("modal").height(10);
    return(
        <>
            {estado &&
                <div className='modal'>
                    <div className='divModal'>
                        <h2>{titulo}</h2>
                        <p>{descrip}</p>
                    </div>
                    <button className='botonCerrar' onClick={()=>cambiarEstado(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                    </button>
                </div>
            }
        </>
    );
}

export default Modal;