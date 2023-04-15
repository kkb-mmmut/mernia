import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router';

const Header = () => {
    const navigate=useNavigate();
    function goHome() {
        navigate("/");
      }
    function goRegister(){
        return navigate("/register");
    }
  return (
    <>  
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand  onClick={goHome} className='fw-bolder'>MERNia</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={goRegister} className='fw-bolder'>Register</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header