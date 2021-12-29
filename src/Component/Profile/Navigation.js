import React from 'react'
import bootstrap from 'bootstrap';
import { Navbar,Container,Nav } from 'react-bootstrap';
function Navigation() {
    return (
        <div>
            <>
   <Navbar bg="primary" variant="dark" className='navbar'>
    <Container>
    <Navbar.Brand href="#home">Majdi Project</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">About us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
</>
        </div>
    )
}

export default Navigation
