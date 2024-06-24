import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import '../styles/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={10} sm={5}>
          <img src="https://userscontent2.emaze.com/images/a1b6bad6-aeea-4745-bbd3-29cca653ff4a/a762c2be-ca8a-4c62-b096-5a255a11bc63image2.png" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/UniversidadTecnicadeAmbatoOficial"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/utecnicaambato/?igsh=MTBxYnQwd3doc2YzdQ%3D%3D"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. Univerdidad Tecnica de Ambato</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
