import React, { useState } from 'react';
import '../styles/formulario.css'; // Importar el archivo CSS

const Formulario = () => {
  const [cedula, setCedula] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [fechaRegistro, setFechaRegistro] = useState('');
  const [errores, setErrores] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    carrera: '',
    semestre: '',
    fechaRegistro: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar los campos antes de enviar el formulario
    let valid = true;
    let newErrores = {};

    if (!cedula) {
      newErrores.cedula = 'Por favor ingrese su cédula';
      valid = false;
    }
    if (!nombre) {
      newErrores.nombre = 'Por favor ingrese su nombre';
      valid = false;
    }
    if (!apellido) {
      newErrores.apellido = 'Por favor ingrese su apellido';
      valid = false;
    }
    if (!telefono) {
      newErrores.telefono = 'Por favor ingrese su teléfono';
      valid = false;
    }
    if (!correo) {
      newErrores.correo = 'Por favor ingrese su correo electrónico';
      valid = false;
    }
    if (!carrera) {
      newErrores.carrera = 'Por favor ingrese su carrera';
      valid = false;
    }
    if (!semestre) {
      newErrores.semestre = 'Por favor ingrese su semestre';
      valid = false;
    }
    if (!fechaRegistro) {
      newErrores.fechaRegistro = 'Por favor ingrese la fecha de registro';
      valid = false;
    }

    if (!valid) {
      setErrores(newErrores);
      return;
    }

    // Si todos los campos están llenos correctamente, puedes enviar el formulario
    console.log('Cédula:', cedula);
    console.log('Nombre:', nombre);
    console.log('Apellido:', apellido);
    console.log('Teléfono:', telefono);
    console.log('Correo electrónico:', correo);
    console.log('Carrera:', carrera);
    console.log('Semestre:', semestre);
    console.log('Fecha de Registro:', fechaRegistro);

    // Resetear los campos y los errores
    setCedula('');
    setNombre('');
    setApellido('');
    setTelefono('');
    setCorreo('');
    setCarrera('');
    setSemestre('');
    setFechaRegistro('');
    setErrores({
      cedula: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      carrera: '',
      semestre: '',
      fechaRegistro: ''
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
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            required
          />
          {errores.apellido && <span className="error">{errores.apellido}</span>}
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
          {errores.telefono && <span className="error">{errores.telefono}</span>}
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
        <div>
          <label htmlFor="carrera">Carrera:</label>
          <input
            type="text"
            id="carrera"
            value={carrera}
            onChange={(e) => setCarrera(e.target.value)}
            required
          />
          {errores.carrera && <span className="error">{errores.carrera}</span>}
        </div>
        <div>
          <label htmlFor="semestre">Semestre:</label>
          <input
            type="text"
            id="semestre"
            value={semestre}
            onChange={(e) => setSemestre(e.target.value)}
            required
          />
          {errores.semestre && <span className="error">{errores.semestre}</span>}
        </div>
        <div>
          <label htmlFor="fechaRegistro">Fecha de Registro:</label>
          <input
            type="date"
            id="fechaRegistro"
            value={fechaRegistro}
            onChange={(e) => setFechaRegistro(e.target.value)}
            required
          />
          {errores.fechaRegistro && <span className="error">{errores.fechaRegistro}</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
