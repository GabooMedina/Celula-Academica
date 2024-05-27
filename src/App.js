import React from 'react';
import Home from './views/Home';
import Information from './views/Information'
import Login from './views/Login';
import Nosotros from './views/Nosotros';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioG from './components/FormularioG';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
