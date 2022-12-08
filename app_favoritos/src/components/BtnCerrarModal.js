import React from 'react'
import btnCerrarLogo from './img/xmark-solid.svg'


const cerrarModal = (e)=>{
    let btn = e.target;
    console.log(btn);
    let padre = btn.parentNode;
    console.log(padre);

    padre.setAttribute("estado", false);
}

const BtnCerrarModal = ({estado,cambiarEstado})=>{
    return(
        <img onClick={(ev)=>cerrarModal(ev)} src={btnCerrarLogo} className='botonCerrar'></img>
    );
}

export default BtnCerrarModal;