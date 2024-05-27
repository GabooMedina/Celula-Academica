import { useState, useEffect } from "react"; 
/*
useState es un hook de React para gestionar el estado interno de componentes funcionales, 
mientras que useEffect permite realizar efectos secundarios en dichos componentes, ejecutando código 
después de su renderización en el DOM.
*/
import { Navbar, Nav, Container } from "react-bootstrap";
// componentes de React-Bootstrap que se utilizan para construir la barra de navegación. 
import logo from '../assets/img/logo.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
// Importaciones de Imagenes para nuestro sitio web
import { HashLink } from 'react-router-hash-link';
/*
Este es un componente de react-router-hash-link que se utiliza para crear enlaces hash en una aplicación React.
 Estos enlaces se utilizan comúnmente para desplazarse a secciones específicas de una página web.
*/
import { BrowserRouter as Router} from "react-router-dom";
/*
Se utiliza para envolver la aplicación y proporcionar la funcionalidad de enrutamiento basado en el navegador. 
Permite que la aplicación responda a cambios en la URL y renderice diferentes componentes según la ruta actual.
*/

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="https://userscontent2.emaze.com/images/a1b6bad6-aeea-4745-bbd3-29cca653ff4a/a762c2be-ca8a-4c62-b096-5a255a11bc63image2.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/añadirus" className={activeLink === 'añadirus' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('añadirus')}>Añadir Personas</Nav.Link>
            <Nav.Link as={Link} to="/information" className={activeLink === 'information' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('information')}>Información</Nav.Link>
            <Nav.Link as={Link} to="/about-us" className={activeLink === 'about-us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-us')}>Nosotros</Nav.Link>
          </Nav>
          <span className="navbar-text">
    
            <Link to='/login'>
              <button className="vvd"><span>Login</span></button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
  )
}
