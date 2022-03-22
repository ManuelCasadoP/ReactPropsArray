import './App.css';
import { useState } from 'react';

import ListaPalabras from './components/ListaPalabras/ListaPalabras.jsx';

function App() {
  const [nuevaPalabra, setNuevaPalabra ] = useState("");
  const [ palabras , setPalabras ] = useState([]);

  function updateNuevaPalabraHandler (event) {
    setNuevaPalabra(event.target.value);
  }

  function addNuevaPalabraHandler () {
    const palabrasActuales = Array.from(palabras);
    palabrasActuales.push(nuevaPalabra);
    setPalabras(palabrasActuales);
    //setPalabras([...palabras, nuevaPalabra])
  }

  return (
    <>
        <input value={nuevaPalabra} onChange={updateNuevaPalabraHandler}/>
        <button onClick={addNuevaPalabraHandler}>Añadir</button>
        <ListaPalabras listaPalabras={palabras}/>
    </>

  );
}

export default App;
