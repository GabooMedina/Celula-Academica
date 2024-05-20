import React, { useState } from 'react';
import '../styles/formulario.css'; // Importar el archivo CSS

const Formulario = () => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [errores, setErrores] = useState({
    cedula: '',
    nombre: '',
    correo: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar los campos antes de enviar el formulario
    if (!cedula) {
      setErrores((prevErrores) => ({ ...prevErrores, cedula: 'Por favor ingrese su cédula' }));
      return;
    }
    if (!nombre) {
      setErrores((prevErrores) => ({ ...prevErrores, nombre: 'Por favor ingrese su nombre' }));
      return;
    }
    if (!correo) {
      setErrores((prevErrores) => ({ ...prevErrores, correo: 'Por favor ingrese su correo electrónico' }));
      return;
    }
    // Si todos los campos están llenos correctamente, puedes enviar el formulario
    console.log('Cédula:', cedula);
    console.log('Nombre:', nombre);
    console.log('Correo electrónico:', correo);
    // También puedes resetear los campos y los errores aquí si es necesario
    setCedula('');
    setNombre('');
    setCorreo('');
    setErrores({
      cedula: '',
      nombre: '',
      correo: ''
    });
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cedula">Cédula:</label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
          {errores.cedula && <span className="error">{errores.cedula}</span>}
        </div>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          {errores.nombre && <span className="error">{errores.nombre}</span>}
        </div>
        <div>
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          {errores.correo && <span className="error">{errores.correo}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
