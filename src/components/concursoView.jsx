import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/ConcursoView.css';  // Importa tu archivo CSS personalizado

const ConcursoView = () => {
  const [concursos, setConcursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedConcurso, setSelectedConcurso] = useState(null);

  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    carrera: 'Software',
    semestre: '',
    nombreGrupo: '', 
  });

  const [formErrors, setFormErrors] = useState({
    cedula: '',
    telefono: '',
    semestre: '',
    nombre: '',
    apellido: '',
    nombreGrupo: ''
  });

  useEffect(() => {
    const fetchConcursos = async () => {
      try {
        const response = await axios.get('https://admin-celula-academica.onrender.com/api/eventos/concursos/');
        setConcursos(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchConcursos();
  }, []);

  const handleShowModal = (concurso) => {
    setSelectedConcurso(concurso);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedConcurso(null);
    resetFormData();
  };

  const resetFormData = () => {
    setFormData({
      cedula: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      carrera: 'Software',
      semestre: '',
      nombreGrupo: '', 
    });
    setFormErrors({
      cedula: '',
      telefono: '',
      semestre: '',
      nombre: '',
      apellido: '',
      nombreGrupo: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    let errorMessage = '';
    if (name === 'cedula' || name === 'telefono') {
      if (!/^\d*$/.test(value)) {
        errorMessage = 'Solo se permiten números';
      } else if (value.length > 10) {
        errorMessage = 'No puede tener más de 10 dígitos';
      }
    } else if (name === 'semestre') {
      if (!/^[1-9]$|^10$/.test(value)) {
        errorMessage = 'El semestre debe ser un número entre 1 y 10';
      }
    } else if (['nombre', 'apellido', 'nombreGrupo'].includes(name)) {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        errorMessage = 'Solo se permiten letras';
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: errorMessage
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFormErrors = {
      cedula: formData.cedula.length !== 10 ? 'La cédula debe tener exactamente 10 dígitos' : '',
      telefono: formData.telefono.length !== 10 ? 'El teléfono debe tener exactamente 10 dígitos' : '',
      semestre: !/^[1-9]$|^10$/.test(formData.semestre) ? 'El semestre debe ser un número entre 1 y 10' : '',
      nombre: !/^[a-zA-Z\s]+$/.test(formData.nombre) ? 'Solo se permiten letras' : '',
      apellido: !/^[a-zA-Z\s]+$/.test(formData.apellido) ? 'Solo se permiten letras' : '',
      nombreGrupo: selectedConcurso && !selectedConcurso.competencia_individual && !/^[a-zA-Z\s]+$/.test(formData.nombreGrupo) ? 'Solo se permiten letras' : ''
    };

    if (Object.values(newFormErrors).some(error => error)) {
      setFormErrors(newFormErrors);
      return;
    }

    const dataToSend = {
      cedula: formData.cedula,
      nombre: formData.nombre,
      apellido: formData.apellido,
      telefono: formData.telefono,
      correo: formData.correo,
      carrera: formData.carrera,
      semestre: formData.semestre,
      nombre_grupo: selectedConcurso && !selectedConcurso.competencia_individual ? formData.nombreGrupo : null,  // Usar null en lugar de cadena vacía
      concurso: selectedConcurso.id,
    };

    try {
      const response = await axios.post('https://admin-celula-academica.onrender.com/api/eventos/inscripciones/', dataToSend);
      console.log('Formulario enviado:', response.data);
      handleCloseModal();
    } catch (error) {
      //console.error('Error al enviar el formulario:', error);
      alert("Se ha alcanzado el numero maximo de integrantes para este grupo");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Concursos</h1>
      <div className="row">
        {concursos.length > 0 ? (
          concursos.map((concurso) => (
            <div className="col-lg-4 col-md-6 mb-4" key={concurso.id}>
              <div className="concurso-card-wrapper" onClick={() => handleShowModal(concurso)}>
                <div className="card-body">
                  <h5 className="card-title">{concurso.nombre}</h5>
                  <p className="card-text">{concurso.descripcion}</p>
                  <p className="card-text">Fecha de inicio: {concurso.fecha_inicio}</p>
                  <p className="card-text">Fecha de fin: {concurso.fecha_fin}</p>
                  <p className="card-text">
                    Tipo de competencia: {concurso.competencia_individual ? 'Individual' : 'Grupal'}
                  </p>
                  {!concurso.competencia_individual && (
                    <p className="card-text">Máx. integrantes: {concurso.max_integrantes}</p>
                  )}
                  <p className="card-text">Valor de inscripción: ${concurso.valor_inscripcion}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron concursos.</p>
        )}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Inscribirse en {selectedConcurso?.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCedula">
              <Form.Label>Cédula</Form.Label>
              <Form.Control
                type="text"
                name="cedula"
                value={formData.cedula}
                onChange={handleInputChange}
                required
                isInvalid={!!formErrors.cedula}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.cedula}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formNombre">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                required
                isInvalid={!!formErrors.nombre}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.nombre}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formApellido">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleInputChange}
                required
                isInvalid={!!formErrors.apellido}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.apellido}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formTelefono">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleInputChange}
                required
                isInvalid={!!formErrors.telefono}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.telefono}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formCorreo">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCarrera">
              <Form.Label>Carrera</Form.Label>
              <Form.Control
                as="select"
                name="carrera"
                value={formData.carrera}
                onChange={handleInputChange}
                required
              >
                <option value="Software">Software</option>
                <option value="TI">TI</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formSemestre">
              <Form.Label>Semestre</Form.Label>
              <Form.Control
                type="text"
                name="semestre"
                value={formData.semestre}
                onChange={handleInputChange}
                required
                isInvalid={!!formErrors.semestre}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.semestre}
              </Form.Control.Feedback>
            </Form.Group>
            {selectedConcurso && !selectedConcurso.competencia_individual && (
              <Form.Group controlId="formNombreGrupo">
                <Form.Label>Nombre del Grupo</Form.Label>
                <Form.Control
                  type="text"
                  name="nombreGrupo"
                  value={formData.nombreGrupo}
                  onChange={handleInputChange}
                  required
                  isInvalid={!!formErrors.nombreGrupo}
                />
                <Form.Control.Feedback type="invalid">
                  {formErrors.nombreGrupo}
                </Form.Control.Feedback>
              </Form.Group>
            )}
            <Button variant="primary" type="submit" className="mt-3">
              Inscribirse
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConcursoView;
