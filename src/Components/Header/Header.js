
import {  getAuth,  signOut  } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const auth = getAuth(app);
const Header = () => {

  const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        
      };
    return (
        <div>
          <>
  <Navbar bg="dark" variant="dark">
    <Container>
    
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/cheakout'>CheakOut</Nav.Link>
      <Nav.Link as={Link} to='/services'>Services</Nav.Link>
      { user ? <Button onClick={logout}>SignOut</Button> :<Nav.Link as={Link} to ='/login'>Login</Nav.Link>}
      <Nav.Link as={Link} to ='/about'>About Me</Nav.Link>
      {
        <Nav.Link as={Link} to ='/blog'>Blog</Nav.Link>
        }
      
      
    </Nav>
    </Container>
  </Navbar>
  
  
</>  
        </div>
    );
};

export default Header;