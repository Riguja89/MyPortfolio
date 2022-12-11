
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Lenguaje from "./Lenguaje";

const NavBar=({setLengua, lengua})=>{

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
         
            <Nav.Link href="#proyects">{lengua=="eng"?<>Projects</>:<>Proyectos</>}</Nav.Link>
            <Nav.Link target="blanck" href="https://1drv.ms/b/s!AlSgIdEmzI5klrxgFeEXvKCJrOjtTA?e=6K0zLJ">{lengua=="eng"?<>Resume</>:<>Currículum</>}</Nav.Link>
            <Nav.Link href="#aboutme">{lengua=="eng"?<>About</>:<>Sobre mi</>}</Nav.Link>
            
            <Nav.Link href="#skills">
                {/* <Link Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={1000} > Skills</Link> */}
                {lengua=="eng"?<>Skills</>:<>Habilidades</>}
               </Nav.Link>
          
        </Nav>
            <Lenguaje setLengua={setLengua}/>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
}

export default NavBar;