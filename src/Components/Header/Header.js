import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <>
  <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/cheakout'>CheakOut</Nav.Link>
      <Nav.Link as={Link} to='/services'>Services</Nav.Link>
      <Nav.Link as={Link} to ='/login'>Login</Nav.Link>
      <Nav.Link as={Link} to ='/about'>About Me</Nav.Link>
      <Nav.Link as={Link} to ='/blog'>Blog</Nav.Link>
      
      
    </Nav>
    </Container>
  </Navbar>
  
  
</>  
        </div>
    );
};

export default Header;