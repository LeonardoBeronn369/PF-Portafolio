import React from 'react'
import ListadoTrabajos from '../ListadoTrabajos/ListadoTrabajos'
import './Portafolio.css'

const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>
      <h2 className='text-portafolio'>Todo lo que puedas <strong>Imaginar</strong> , lo podras <strong>programar</strong>.</h2>
      <ListadoTrabajos/>
    </div>
  )
}

export default Portafolio