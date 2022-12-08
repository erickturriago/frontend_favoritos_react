# frontend_favoritos_react
Que es React
React ayuda a crear interfaces de usuario interactivas fácilmente. Crea vistas simples para cada estado de la aplicación, y React se actualizará de manera eficiente y representará los componentes correctos cuando cambien los datos. Las vistas declarativas hacen que el código sea más predecible y, por lo tanto, más fácil de depurar.
El elemento más importante de React es el componente, que es, en esencia, una pieza de la interfaz de usuario. Como norma general, al diseñar una aplicación con React, lo que estamos haciendo es crear componentes independientes y reusables para, poco a poco, crear interfaces de usuario más complejas.

Como crear un componente
Usaremos create-react-app para inicializar el proyecto.
Usaremos la sintaxis de React Hooks para crear los componentes.
Crea un nuevo proyecto de React ejecutando el siguiente comando:
npx create-react-app react-autosuggestion-app

Una vez que hayas creado el proyecto, elimina todos los archivos de la carpeta src y crea los archivos index.js, App.js, styles.css dentro de la carpeta src.
También crea las carpetas components y custom-hooks dentro de la carpeta src.
A partir de ese punto, lo demás pasos de consisten en idear y crear los componentes que se requieran en la aplicación, de modo que en distintos archivos se pueden retornar componentes con ciertas características específicas los cuales se puede reutilizar las veces que sea necesario, siguiendo principios similares a la herencia, y a la reutilización de código.
En el presente trabajo se crearon los siguientes componentes:

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
Este componente es un contenedor que tendrá el nombre del video juego como también la imagen del mismo. Se evidencia que por parámetro recibe los valores que se van a cargar dentro del mismo. De modo que cada vez que se reutilice el elemento se podrán pasar parámetros diferentes, y de esta manera tener pequeñas divisiones en el programa mostrando diferente información.

Por otro lado, tenemos el siguiente componente:
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
Este componente se llama modal, y una etiqueta hija de favorito, de modo que podemos observar ciertos parecidos a una jerarquía como una herencia. Adicionalmente se le pasa el nombre, y una descripción que fue obtenida de otro archivo con un objeto literal. Este objeto modal tiene como finalidad ser una ventana que se abre mostrando el video juego en cuestión mostrando la descripción del mismo.

Conclusiones
React es un framework muy rápido, ya que se evidencia un renderizado muy eficiente, adicionalmente es evidente la facilidad en la cual se pueden crear los componentes. Por otro lado, se evidencia el uso de scripts en todas las partes de construcción de una aplicación. De modo que se crean pequeñas partes de código, que son fáciles de entender, y estos fragmentos de código son utilizados siempre que sea necesario. De modo que se tiene una aplicación modularizada y segmentada en diferentes partes. También la complejidad del programa se ve bastante reducida.
Así que considero que React es un lenguaje poderoso para el desarrollo web por su facilidad y agilidad, adicionalmente actualmente en el mercado es bastante apetecido. Además, es bastante evidente que los scripts cada vez toman más fuerza y se posicionan como un paradigma aparte de los ya conocidos, el cual se evidencia que ha tenido buenos resultados y día a día tomará más fuerza 
