import React from 'react';
import '../styles/LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export const LoginForm = () => {
  return (
    <div className='wrapper'>
<form action="">
    <h1>Login</h1>
    <div className='input-box'>
        <input type="text" placeholder='UserName' required />
        <FaUser className='icon'/>
    </div>
    <div className='input-box'>
        <input type="password" placeholder='Password' required />
        <FaLock className='icon'/>
    </div>
    <div className='Remenber-forgot'>
        <label ><input type="checkbox" />Recuerdame </label>
        <a href="#">Forgot password?</a>
    </div>
    <button type='submit'>Login</button>
    <div className='register-link'>
        <p>Don't have an account?<a href='#'>Registrar</a></p>
    </div>
</form>
    </div>
  )
};