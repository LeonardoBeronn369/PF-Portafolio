import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { trabajos } from '../../data/trabajos'; 
import './Proyecto.css'

const Proyecto = () => {
    const [proyecto, setProyecto] = useState({})
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id)

        setProyecto(proyecto[0])
    }, [])

  return (
    <div className='page page-work'>
        <div>
            <img src={"/images/"+proyecto.id+".jpg"} />
        </div>
      <h1 className='heading'>{proyecto.nombre} </h1>
      <p className='tecnologias'><strong>Tecnologias:</strong>  {proyecto.tecnologias}</p>
      <p className='descripcion'><strong>Descripcion:</strong>  {proyecto.descripcion}</p>
      <a href={"http://"+proyecto.url} target="_blank">Ir al proyecto</a>
    </div>
  )
}

export default Proyecto