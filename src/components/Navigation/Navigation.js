import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';
const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className='fw-bold'> <span className='text-danger'>Auto</span> Xpress</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navigation;