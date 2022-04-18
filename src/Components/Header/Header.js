import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to='/'>Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link as={Link} to='/services'>Services</Nav.Link>
      <Nav.Link as={Link} to ='/login'>Login</Nav.Link>
      <Nav.Link href="#pricing">Logout</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
  
  
</>  
        </div>
    );
};

export default Header;