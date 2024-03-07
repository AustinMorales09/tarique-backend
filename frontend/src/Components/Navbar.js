// Navbar.js

import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import logo from './Carousel1_pics/logo.jpg';

const NavigationBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (clear cookies, JWT, etc.)
    // For demonstration, we'll just update the state and navigate to the home page.
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <Navbar className="Navbar " bg="" variant="dark" expand="lg" fixed="top">
      <Container>
      <img src={logo} alt='logo' className='logo' />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto hover ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/storefront">Storefront</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/petform">Pet Form</Nav.Link>
            {isAuthenticated ? (
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>

            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
