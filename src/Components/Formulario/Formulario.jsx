import React, { useState } from 'react';
import './Formulario.css'
import Swal from 'sweetalert2'


const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const showAlert = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Enviado Correctamente",
      showConfirmButton: false,
      timer: 1500,
      width: '18rem',
      background: '#748cab',
    });
  }

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.nombre) {
      isValid = false;
      formErrors['nombre'] = 'El nombre es obligatorio';
    }

    if (!formData.email) {
      isValid = false;
      formErrors['email'] = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      formErrors['email'] = 'El email no es válido';
    }

    if (!formData.mensaje) {
      isValid = false;
      formErrors['mensaje'] = 'El mensaje es obligatorio';
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      localStorage.setItem('formData', JSON.stringify(formData));
      showAlert()
      setFormData({ nombre: '', email: '', mensaje: '' });
      setErrors({});
    }
  };

  return (
    
    <div className='cont-formulario'>
    <form onSubmit={handleSubmit}>
      <legend>Cotáctame llenando todos los datos</legend>
      <div>
        <label>Nombre:</label>
        <input className='input-text'
          placeholder='nombre'
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p>{errors.nombre}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input className='input-text'
          placeholder='correo@correo.com'
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label>Mensaje:</label>
        <textarea className='input-text'
          placeholder='Quiero trabajar contigo...'
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
        />
        {errors.mensaje && <p>{errors.mensaje}</p>}
      </div>      
      <button className='btn-formulario' type="submit">Enviar</button>     
    </form>
    </div>
     
  );
};

export default Formulario;