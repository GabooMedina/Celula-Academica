import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Cards } from "./Cards";
import cursoImg1 from "../assets/img/cursoPython.png";
import cursoImg2 from "../assets/img/java.png";
import cursoImg3 from "../assets/img/js.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import lider1 from "../assets/img/lider.png";
import lider2 from "../assets/img/lider2.png";
import lider3 from "../assets/img/lider3.png";
import marketing1 from "../assets/img/marketing.png";
import marketing2 from "../assets/img/marketing2.png";
import marketing3 from "../assets/img/marketing3.png";
import 'animate.css';
import '../styles/Courses.css';
import TrackVisibility from 'react-on-screen';

export const Courses = () => {

    const courses = [
        {
            titulo: "Curso Python",
            descripcion: "Dirigido a Estudiantes de Ingeniería",
            imgUrl: cursoImg1,
        },
        {
            titulo: "Curso Java",
            descripcion: "Dirigido a Estudiantes de Ingeniería",
            imgUrl: cursoImg2,
        },
        {
            titulo: "Curso de JavaScript",
            descripcion: "Dirigido a Estudiantes de Ingeniería",
            imgUrl: cursoImg3,
        },

    ];

    const leader = [
        {
            titulo: "Curso Liderazgo Empresarial",
            descripcion: "Dirigido a Estudiantes Emprendedores",
            imgUrl: lider1,
        },
        {
            titulo: "Curso Liderazgo Motivacional",
            descripcion: "Dirigido a Estudiantes Emprendedores",
            imgUrl: lider2,
        },
        {
            titulo: "Curso Liderazgo Recreacional",
            descripcion: "Dirigido a Estudiantes Emprendedores",
            imgUrl: lider3,
        },

    ];

    const marketing = [
        {
            titulo: "Curso Marketing",
            descripcion: "Dirigido a Estudiantes/Publico en General",
            imgUrl: marketing1,
        },
        {
            titulo: "Curso Marketing Digital",
            descripcion: "Dirigido a Estudiantes/Publico en General",
            imgUrl: marketing2,
        },
        {
            titulo: "Curso Marketing Empresarial",
            descripcion: "Dirigido a Estudiantes/Publico en General",
            imgUrl: marketing3,
        },

    ];

    return (
        <section className="cursos" id="cursos">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Cursos</h2>
                                    <p>Bienvenido a la sección de Cursos de Célula Académica, donde encontrarás una amplia variedad de programas educativos diseñados para impulsar tu desarrollo personal y profesional. Nuestros cursos están cuidadosamente estructurados para ofrecerte el conocimiento y las habilidades necesarias en diversas áreas del saber.</p>
                                    <Tab.Container id="cursos-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Cursos Programación</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Cursos Liderazgo</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Cursos Marketing</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row className="justify-content-center">
                                                    {
                                                        courses.map((cursos, index) => {
                                                            return (
                                                                <Cards
                                                                    key={index}
                                                                    {...cursos}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row className="justify-content-center">
                                                    {
                                                        leader.map((cursos, index) => {
                                                            return (
                                                                <Cards
                                                                    key={index}
                                                                    {...cursos}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row className="justify-content-center">
                                                    {
                                                        marketing.map((cursos, index) => {
                                                            return (
                                                                <Cards
                                                                    key={index}
                                                                    {...cursos}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
