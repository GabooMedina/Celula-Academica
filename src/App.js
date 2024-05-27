import Home from './views/Home';
import AboutUs from './views/AboutUs';
import Information from './views/Information';
import AñadirUs from './views/AñadirUs';
import Login from './views/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path='/añadirus' element={<AñadirUs />}/>
      </Routes>
    </Router>
  );
}

export default App;
