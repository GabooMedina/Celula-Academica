import React from "react";
import { NavBar } from "../components/NavBar";
import { LoginForm } from "../components/Loginform";
import { Footer } from "../components/Footer";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Login(){
    return(

        <div>
            <div>
            <NavBar />
            </div>
           
            <div className="container1"> 
            <LoginForm />
            </div>
            <div>
            <Footer/>
            </div>
            
        </div>
        
    );
}

export default Login;