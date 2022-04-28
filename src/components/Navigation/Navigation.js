import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
  <Container>
    <Navbar.Brand to="#home" className='fw-bold'> <span className='text-danger'>Auto</span> Xpress</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink to="/" className={({isActive})=>isActive?'active-link':'link'}>Home</NavLink>
        <NavLink to="/inventory"  className={({isActive})=>isActive?'active-link':'link'}>Inventory</NavLink>
        <NavLink to="/blogs"  className={({isActive})=>isActive?'active-link':'link'}>Blogs</NavLink>
        <NavLink to="/about"  className={({isActive})=>isActive?'active-link':'link'}>About</NavLink>
        
      </Nav>
      <Nav>
      <NavLink to="/login"  className={({isActive})=>isActive?'active-link':'link'}>Login</NavLink>
      <NavLink   to="/register"  className={({isActive})=>isActive?'active-link':'link'}>
        Register
      </NavLink>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Navigation;