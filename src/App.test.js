
import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Importa BrowserRouter
import { render } from '@testing-library/react';
import { Banner } from './components/Banner';
import { Cards } from './components/Cards';
import { Courses} from './components/Courses';
import { Footer} from './components/Footer';
import { NavBar} from './components/NavBar';


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