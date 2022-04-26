import React from 'react'
import { useState } from "react";
import "./contador.css"

function Contador() {
    const [Contador, setcontador] = useState(0);

    //Funcion de flecha
    const incrementar = (previo) => { return previo + 1; };
    const disminuir = (previo) => { return previo - 1; };
  
    return (
      <div className="App">
        <h1>Contador</h1>
        <h2>{Contador}</h2>
        <button onClick={() => {setcontador(incrementar) } } className ="btn-incremento">+</button>
        <button onClick={() => {setcontador(disminuir) } } className ="btn-incremento">-</button>
      </div>
    );
}

export default Contador