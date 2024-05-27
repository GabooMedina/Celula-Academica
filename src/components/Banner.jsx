import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../styles/Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Banner = () => {
 
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>{`Célula Académica`}</h1>
                                    <p>¡Bienvenidos a nuestra célula académica dedicada al mundo del software! Aquí encontrarás un espacio vibrante y
                                        enérgico donde explorarás las últimas tendencias tecnológicas, participarás en emocionantes charlas y talleres,
                                        y te sumergirás en un ambiente de aprendizaje colaborativo. Nuestro objetivo es inspirarte, capacitar y
                                        conectar con una comunidad apasionada por el desarrollo de software.
                                        ¡Únete a nosotros mientras juntos exploramos el fascinante mundo del código y la innovación tecnológica! </p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img" />
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;