import React from 'react';
import { Navbar, Nav, NavDropdown, Container ,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Navbar1 = () => {
  return (
    <Navbar expand="lg" fixed="top" className="bg-dark" variant="dark"  >
      <Container>
        
       
      
          <img src="IMG.png" style={{height:"75px"}}></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/" className='l' style={{color:"red"}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/about" className='l' style={{color:"red"}}>About</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className='l' style={{color:"red"}}>Contact</Link></Nav.Link>
            <Nav.Link><Link to="/career" className='l' style={{color:"red"}}>Career</Link></Nav.Link>
            
          </Nav>
          <Nav>
            
            
            <Button variant="outline-danger"><Link to="/signup" className='l'>Login</Link></Button>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;