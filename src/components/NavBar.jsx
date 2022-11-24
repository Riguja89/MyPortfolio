
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar=()=>{

    return(
    <Navbar className={`px-3 fixed-top navbar-white`} expand="lg"> 
     <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<Jaime/>`}
      </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
            <div>Projects</div>
            <li>Resume</li>
            <li>About</li>
            <li>Skills</li>
        </Nav>

        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavBar;