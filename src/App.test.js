
import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Importa BrowserRouter
import { render, screen, fireEvent } from '@testing-library/react';
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

test('renders form fields', () => {
  render(<Formulario />);

  // Verificar que los campos del formulario están presentes
  expect(screen.getByLabelText(/cedula/i)).toBeTruthy();
  expect(screen.getByLabelText(/nombre/i)).toBeTruthy();
  expect(screen.getByLabelText(/apellido/i)).toBeTruthy();
  expect(screen.getByLabelText(/teléfono/i)).toBeTruthy();
  expect(screen.getByLabelText(/correo/i)).toBeTruthy();
  expect(screen.getByLabelText(/carrera/i)).toBeTruthy();
  expect(screen.getByLabelText(/semestre/i)).toBeTruthy();
  expect(screen.getByLabelText(/fecha de registro/i)).toBeTruthy();
});