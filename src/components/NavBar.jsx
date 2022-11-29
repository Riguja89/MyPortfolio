
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
//import { Link } from "react-scroll";

const NavBar=()=>{

    return(
        <>
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 fixed-top "> 
    <Container>
     <Navbar.Brand className="navbar-brand" href="/#home">
        {`<Jaime/>`}
      </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
         
            <Nav.Link href="#proyects">Projects</Nav.Link>
            <Nav.Link>Resume</Nav.Link>
            <Nav.Link href="#aboutme">About</Nav.Link>
            
            <Nav.Link href="#skills">
                {/* <Link Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={1000} > Skills</Link> */}
                Skills
               </Nav.Link>
          
        </Nav>

        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
}

export default NavBar;