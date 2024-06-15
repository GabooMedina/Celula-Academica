
import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Importa BrowserRouter
import { render } from '@testing-library/react';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards';
import { Courses} from './components/Courses';
import { Footer} from './components/Footer';
import { NavBar} from './components/NavBar';
import {Formulario} from './components/Formulario';


// Prueba de renderizado del Banner
test('Renderizar Banner', () => {
  render(<Banner />);
});

// Prueba de renderizado de Tarjetas de Curso
test('Renderizar Tarjetas', () => {
  render(<Cards/>);
});

// Prueba de renderizado de Cursos
test('Renderizar Cursos', () => {
  render(<Courses/>);
});

// Prueba de renderizado del Footer
test('Renderizar Footer', () => {
  render(<Footer/>);
});

// Prueba de renderizado del NavBar
test('Renderizar NavBar', () => {
  render(
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
});

test('Renderizar ForumularioU',()=>{
  render(<Formulario/>)
})

test('Verificar el estado inicial del formulario', () => {
  render(<Formulario />);
  
  // Verificar que los campos estén vacíos
  expect(screen.getByLabelText(/Cédula:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Nombre:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Apellido:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Teléfono:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Correo electrónico:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Carrera:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Semestre:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Fecha de Registro:/i)).toHaveValue('');
});