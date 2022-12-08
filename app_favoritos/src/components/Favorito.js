
import React,{useState} from 'react';
import "./styles.css";
import Imagenes from "./Imagenes";
import Modal from './Modal';
import videoJuegos from './videoJuegos';

const Favorito = ({msg,srcImg})=>{
    const [estadoModal1,cambiarEstadoModal1] = useState(false);
    let cero = 1;
    let objeto = videoJuegos[srcImg];
    return(
        <article>
            <h2>{msg}</h2>
            <img value={srcImg} src={Imagenes[srcImg].img} onClick={()=>{cambiarEstadoModal1(!estadoModal1)}}></img>
            <Modal
                estado={estadoModal1}
                cambiarEstado={cambiarEstadoModal1}
                titulo={objeto.titulo}
                descrip={objeto.sinopsis}
            >
            </Modal>
        </article>
    )
}

export default Favorito;