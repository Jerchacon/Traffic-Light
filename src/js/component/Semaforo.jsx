import React, { useState } from 'react'

const Semaforo = () => {
    const [encendida, setEncendida] = useState('')
    return (
        <div className='contenedor'>
            <div className="barra"></div>
            <div className="marco">
                <div className={"rojo " + (encendida === 'brillaR' ? 'resplandor' : '')} onClick={() => setEncendida('brillaR')}></div>
                <div className={"amarillo " + (encendida === 'brillaA' ? 'resplandor' : '')} onClick={() => setEncendida('brillaA')}></div>
                <div className={"verde " + (encendida === 'brillaV' ? 'resplandor' : '')} onClick={() => setEncendida('brillaV')}></div>
            </div>
        </div>
    )
}

export default Semaforo