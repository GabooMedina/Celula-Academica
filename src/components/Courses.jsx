import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Cards } from "./Cards";
import cursoImg1 from "../assets/img/cursoPython.png";
import cursoImg2 from "../assets/img/java.png";
import cursoImg3 from "../assets/img/js.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import '../styles/Courses.css';
import TrackVisibility from 'react-on-screen';

export const Courses = () => {

    const courses = [
        {
            titulo: "Business Startup",
            descripcion: "Design & Development",
            imgUrl: cursoImg1,
        },
        {
            titulo: "Business Startup",
            descripcion: "Design & Development",
            imgUrl: cursoImg2,
        },
        {
            titulo: "Business Startup",
            descripcion: "Design & Development",
            imgUrl: cursoImg3,
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
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <Tab.Container id="cursos-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                                            <Tab.Pane eventKey="section">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
