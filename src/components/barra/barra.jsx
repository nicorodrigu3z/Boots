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
            <NavLink to='/'> <Nav.Link  >Inicio</Nav.Link> </NavLink>
            <NavLink to='/productos'> <Nav.Link >Productos</Nav.Link>  </NavLink>
            <NavLink to='/turnos'> <Nav.Link >Turnos</Nav.Link>  </NavLink>
            <NavLink to='/contactos'> <Nav.Link >Nosotros</Nav.Link>  </NavLink>
            <NavLink to='/carrito'> <Nav.Link > <CartWidget /> </Nav.Link>  </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
