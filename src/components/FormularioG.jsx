import React, { useState } from 'react';
import '../styles/formulario.css'; // Importar el archivo CSS

const FormularioG = () => {
  const [nombreEquipo, setNombreEquipo] = useState('');
  const [integrantes, setIntegrantes] = useState([{ cedula: '', nombre: '', correo: '' }]);
  const [errores, setErrores] = useState([{ cedula: '', nombre: '', correo: '' }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newIntegrantes = [...integrantes];
    newIntegrantes[index][name] = value;
    setIntegrantes(newIntegrantes);
  };

  const handleAddIntegrante = () => {
    if (integrantes.length < 3) {  // Limitar a 3 integrantes además del inicial
      setIntegrantes([...integrantes, { cedula: '', nombre: '', correo: '' }]);
      setErrores([...errores, { cedula: '', nombre: '', correo: '' }]);
    } else {
      alert('Solo se pueden agregar hasta 3 integrantes.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrores = integrantes.map(integrante => {
      const error = { cedula: '', nombre: '', correo: '' };
      if (!integrante.cedula) error.cedula = 'Por favor ingrese su cédula';
      if (!integrante.nombre) error.nombre = 'Por favor ingrese su nombre';
      if (!integrante.correo) error.correo = 'Por favor ingrese su correo electrónico';
      return error;
    });

    if (!nombreEquipo) {
      alert('Por favor ingrese el nombre del equipo');
      return;
    }

    setErrores(newErrores);

    const hasErrors = newErrores.some(error => error.cedula || error.nombre || error.correo);
    if (hasErrors) return;

    // Aquí puedes enviar los datos a tu backend o procesarlos como desees
    console.log('Nombre del Equipo:', nombreEquipo);
    console.log('Integrantes:', integrantes);

    // Resetear los campos y errores
    setNombreEquipo('');
    setIntegrantes([{ cedula: '', nombre: '', correo: '' }]);
    setErrores([{ cedula: '', nombre: '', correo: '' }]);
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombreEquipo">Nombre del Equipo:</label>
          <input
            type="text"
            id="nombreEquipo"
            value={nombreEquipo}
            onChange={(e) => setNombreEquipo(e.target.value)}
            required
          />
        </div>
        {integrantes.map((integrante, index) => (
          <div key={index}>
            <label htmlFor={`cedula-${index}`}>Cédula:</label>
            <input
              type="text"
              id={`cedula-${index}`}
              name="cedula"
              value={integrante.cedula}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            {errores[index].cedula && <span className="error">{errores[index].cedula}</span>}
            
            <label htmlFor={`nombre-${index}`}>Nombre:</label>
            <input
              type="text"
              id={`nombre-${index}`}
              name="nombre"
              value={integrante.nombre}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            {errores[index].nombre && <span className="error">{errores[index].nombre}</span>}
            
            <label htmlFor={`correo-${index}`}>Correo electrónico:</label>
            <input
              type="email"
              id={`correo-${index}`}
              name="correo"
              value={integrante.correo}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
            {errores[index].correo && <span className="error">{errores[index].correo}</span>}
          </div>
        ))}
        {integrantes.length < 3 && (
          <button type="button" onClick={handleAddIntegrante}>Agregar Integrante</button>
        )}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioG;
