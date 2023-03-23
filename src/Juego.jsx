import React from 'react'
import { useState } from 'react'

function Juego() {

    let opc = ['Piedra', 'Papel', 'Tijera'];
    // 1 creamos variables, una de usuario y otra de maquina 
    const [human, setHuman] =useState ('')
    const [robot, setRobot] =useState ('');

    let juegoMaquina =() => {
        let randomOpcMaquina = Math.round ( Math.random()*(opc.length-1) );
        setRobot(opc[randomOpcMaquina] )
    }
    let juegoHuman = (e) =>{
        setHuman(e.target.innerText)
        juegoMaquina();
    }

    function ganador(){
        if (human==='Piedra' && robot==='Tijera') {
            alert('Gana Humano') 
        }else if (human==='Tijera'&& robot==='Papel') {
            alert ('Gana Humano')
        }else if (human==='Papel'&& robot==='Piedra') {
            alert('Gana Humano')
        } else if (human===robot) {
            alert('Empate')
        } 
        else{
            alert ('Gano Robot')
        }

    }

  return (
    <div className='pantalla'>
        <div>
            <h4>Human</h4>
            <h3 style={{color: 'green'}}>{human}</h3>
        </div>
        <div>
            <h3>Robot</h3>
            <p>{robot}</p>
        </div>
        <div>
            <button onClick={juegoHuman}>Piedra</button>
            <button onClick={juegoHuman}>Papel</button>
            <button onClick={juegoHuman}>Tijera</button>
            <button onClick={ganador}>Guardar</button>
        </div>
    </div>
  )
}

export default Juego