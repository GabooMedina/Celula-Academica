import React from "react";
import { NavBar } from "../components/NavBar";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Charlas from '../components/charlas';
import { Footer } from "../components/Footer";
function Vistacharlas(){
    return (
        <>
        <NavBar />
        
       <Charlas/>
        </>
    );
}
// <Formulario/>
export default Vistacharlas;