import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Charlas.css';  // Importa tu archivo CSS personalizado

const Charlas = () => {
  const [charlas, setCharlas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [ponente, setPonente] = useState(null);

  useEffect(() => {
    const fetchCharlas = async () => {
      try {
        const response = await axios.get('https://admin-celula-academica.onrender.com/api/eventos/charlas/');
        console.log(response.data);
        setCharlas(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharlas();
  }, []);

  const handleShowModal = async (charla) => {
    try {
      const response = await axios.get(`https://admin-celula-academica.onrender.com/api/eventos/ponentes/${charla.ponentes}`);
      console.log(response.data.ponente);
      setPonente(response.data);
      setShowModal(true);
    } catch (error) {
      
      setError(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setPonente(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Charlas</h1>
      <div className="row">
        {charlas.length > 0 ? (
          charlas.map((charla) => (
            <div className="col-lg-4 col-md-6 mb-4" key={charla.id}>
              <div className="charla-card-wrapper" onClick={() => handleShowModal(charla)}>
                <div className="card-body">
                  <div 
                    className="image-container mb-2" 
                    style={{
                      backgroundImage: `url(${charla.imagen})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '100%',
                      height: '100px'
                    }}
                  ></div>
                  <h5 className="card-title">{charla.nombre}</h5>
                  <p className="card-text">{charla.descripcion}</p>
                  <p className="card-text">Fecha de inicio: {charla.fecha_inicio}</p>
                  <p className="card-text">Fecha de fin: {charla.fecha_fin}</p>
                  <p className="card-text">Horario: {charla.fecha_fin}</p>
                  
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron charlas.</p>
        )}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Información del Ponente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ponente ? (
            <div>
              <h5>{ponente.nombre} {ponente.apellido}</h5>
              <p>{ponente.biografia}</p>
              <p><strong>Email:</strong> {ponente.correo}</p>
              <p><strong>Teléfono:</strong> {ponente.telefono}</p>
              <h6>Horario: {ponente.hora_inicio} - {ponente.hora_fin}</h6>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Charlas;
