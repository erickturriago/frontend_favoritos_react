import './App.css';
import React,{useState} from 'react';
// import Favorito from './components/Favorito';
import Favorito from './components/Favorito';
import videoJuegos from './components/videoJuegos';

const App = () =>{
  return (
    <section>
      <Favorito msg={videoJuegos[0].titulo} srcImg={0}/>
      <Favorito msg={videoJuegos[1].titulo} srcImg={1}/>
      <Favorito msg={videoJuegos[2].titulo} srcImg={2}/>
      <Favorito msg={videoJuegos[3].titulo} srcImg={3}/>
      <Favorito msg={videoJuegos[4].titulo} srcImg={4}/>
      <Favorito msg={videoJuegos[5].titulo} srcImg={5}/>
      <Favorito msg={videoJuegos[6].titulo} srcImg={6}/>
      <Favorito msg={videoJuegos[7].titulo} srcImg={7}/>
      <Favorito msg={videoJuegos[8].titulo} srcImg={8}/>
      <Favorito msg={videoJuegos[9].titulo} srcImg={9}/>
      <Favorito msg={videoJuegos[10].titulo} srcImg={10}/>
      <Favorito msg={videoJuegos[11].titulo} srcImg={11}/>
    </section>
  );
}
export default App;
