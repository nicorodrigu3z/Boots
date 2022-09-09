import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Barra.css';
import CartWidget from '../carrito/carrito';
import React from 'react';
import { NavLink } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >Lito Coiffeur</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to='/'> Inicio </NavLink>
            <NavLink to='/productos'> Productos  </NavLink>
            <NavLink to='/turnos'> Turnos </NavLink>
            <NavLink to='/contactos'> Nosotros </NavLink>
            <NavLink to='/carrito'> <CartWidget />   </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
