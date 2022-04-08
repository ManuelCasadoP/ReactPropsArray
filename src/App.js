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
    //Se puede hacer lo mismo con una sola línea en vez de las 3 de abajo.
    //const palabrasActuales = Array.from(palabras); // Se puede hacer con solo un línea.
    //palabrasActuales.push(nuevaPalabra); // Se puede hacer con solo una línea.
    //setPalabras(palabrasActuales);       // Se puede hacer con solo una línea.
    setPalabras([...palabras, nuevaPalabra])
    
    setNuevaPalabra("");
  }

  function resetPalabras() {
    setPalabras("");
  }

  return (
    <>
        <input value={nuevaPalabra} onChange={updateNuevaPalabraHandler}/>
        <button onClick={addNuevaPalabraHandler}>Añadir</button>
        <button onClick={resetPalabras}>Reset</button>
        <ListaPalabras listaPalabras={palabras}/>
    </>

  );
}

export default App;
