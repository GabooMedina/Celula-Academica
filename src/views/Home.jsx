
import React from "react";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import { Courses } from "../components/Courses";
import { Footer } from "../components/Footer";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home(){
    return (
        <div>
            <NavBar />
            <Banner/>
            <Courses/>
            <Footer/>
        </div>
    );
}

export default Home;
