import React from 'react'
import { useState } from 'react'

function Pantalla({texto}) {

const [contador, setContador] =useState(0);

 let incrementar = function(){
    setContador(contador + 1);
}

 let decrementar = function(){
    setContador(contador - 1);
    
}

  return (
        <div>
            <h1>{contador}</h1>
            <button onClick={incrementar}>Incrementar </button>
            <button onClick={decrementar}>Decrementar </button>
        </div>
    )
}

export default Pantalla