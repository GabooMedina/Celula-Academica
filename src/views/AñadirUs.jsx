import React from "react";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Courses } from "../components/Courses";
import { Footer } from "../components/Footer";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "../components/Formulario";
import ConcursoView from '../components/concursoView';

function AñadirUs(){
    return (
        <>
        <NavBar />
        
       <ConcursoView/>
        </>
    );
}
// <Formulario/>
export default AñadirUs;