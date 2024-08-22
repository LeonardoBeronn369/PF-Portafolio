import React from 'react'
import { Link } from 'react-router-dom'
import ListadoTrabajos from '../ListadoTrabajos/ListadoTrabajos'
import './Inicio.css'

const Inicio = () => {
  return (
    <div className='home'>
      <h1>Leonardo Berón</h1>
      <p>Front end Developer</p>
      <h2>Apasionado en todo lo que hago, siempre dispuesto a enfrentar desafíos, amante de todo lo que implique <strong>transformación digital</strong> y <strong>accesibilidad</strong> para lograr una verdadera inclusión. ¿Mi punto único? La versatilidad, lo que me ha impulsado a adaptarme a los entornos de trabajo.     
      </h2>
      <h3 className='title'>
      Mi enfoque se centra  en desarrollar soluciones a medida que se adapten a las necesidades específicas de cada cliente, asegurando un diseño atractivo, funcionalidad robusta y una experiencia de usuario excelente. Estoy disponible para colaborar en proyectos tanto a nivel local como internacional. <Link to="/contacto">Contacta conmigo.</Link>
      </h3>
      <section className='lasts-works'>
        <h2>Algunos de mis proyectos</h2>
        <p >Estos son algunos de mis trabajos de desarrollo web.</p>
        <ListadoTrabajos limite="2"/>
      </section>
    </div>
  )
}

export default Inicio