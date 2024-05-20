import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Information from './views/Information'
import Login from './views/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioG from './components/FormularioG';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/about-us" element={<FormularioG />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
