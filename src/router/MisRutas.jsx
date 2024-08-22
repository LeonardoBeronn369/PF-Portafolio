import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import Inicio from '../Components/Inicio/Inicio'
import Portafolio from "../Components/Portafolio/Portafolio"
import Servicios from "../Components/Servicios/Servicios"
import Footer from '../Components/Layout/Footer/Footer'
import Proyecto from '../Components/Proyecto/Proyecto'
import Formulario from '../Components/Formulario/Formulario'
import NavBar from '../Components/Layout/NavBar/NavBar'

const MisRutas = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <section className='content'>
          <Routes>
              <Route path='/' element={<Navigate to="/inicio"/>} />
              <Route path='/inicio' element={<Inicio/>} />
              <Route path='/portafolio' element={<Portafolio/>} />
              <Route path='/servicios' element={<Servicios/>} />
              <Route path='/contacto' element={<Formulario/>} />
              <Route path='/proyecto/:id' element={<Proyecto/>} />
              <Route path='*' element={
              <div className='page'>
                <h1 className='heading'>Error 404</h1>
              </div>
              } />
          </Routes>
        </section>
        
        
        <Footer/>

    </BrowserRouter>
    </>
  )
}

export default MisRutas