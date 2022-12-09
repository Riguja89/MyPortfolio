import React from "react";
import Jumbotron from "./Jumbotron"
import ImagePerfil from "../images/ImagePerfil.jpeg"

const AboutMe =()=>{

    return(
        <Jumbotron id="aboutme" className="m-0">
              <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {(
            <img
              className="border border-secondary rounded-circle"
              src={ImagePerfil}
              alt="profilepicture"
              width="300px"
              height="300px"
            />
          )}
        </div>
        <div className={`col-lg-7`}>
          <h2 className="display-4 mb-5 text-center">About Me</h2>
          <p className="lead text-center">
                Mi nombre es Jaime Gutierrez, soy graguado de la Universidad de Pamplona en el año 2012 del progama
                de ingeniería en mecatrónica, Full Stack Developer del Boot Camp Soy Henry, y beneficiario del programa 
                Mision TIC 2022 del gobierno Colombiano. Soy muy apasionado por la tecnología ya que gracias a esta podemos
                dar grandes soluciones a problemas comunes de la vida, mi objetivo es vivir de esta pasion en el campo de la 
                Ingenieria de Software.</p>
          {(
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href="https://1drv.ms/b/s!AlSgIdEmzI5klrxgFeEXvKCJrOjtTA?e=6K0zLJ"
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
        </Jumbotron>
    );
}

export default AboutMe;