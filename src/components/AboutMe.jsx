import React from "react";
import Jumbotron from "./Jumbotron"
import ImagePerfil from "../images/ImagePerfil.jpeg"

const AboutMe =({lengua})=>{

    return(
        <Jumbotron id="aboutme" className="m-0">
              <div className="container row">
              <h2 className="display-4 mb-5 text-center">{lengua==="eng"?<>About me</>:<>Sobre mi</>}</h2>
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
          
          <p className="lead">
          {lengua==="eng"?<>My name is Jaime Gutierrez, I am a Full Stack Developer from the Boot Camp Soy Henry, a web application developer from the Universidad Nacional and Mission TIC 2022, I am a mechatronics engineer from the Universidad de Pamplona, whit specializing in Industrial Automation. I am passionate about technology and I have always headed towards it, since thanks to it we can provide great solutions to common problems in life and to others that we did not know existed, my goal is to live from this passion in the field of Software Engineering specifically web development.
I love practicing mountain biking as a team and enjoying the outdoors and the beautiful landscapes, I am also a lover of movies and good cinema. I feel very comfortable working together and collaborating to carry out wonderful projects, as well as contributing new ideas to innovate and improve the ways in which things are usually done.
</>:
<>Mi nombre es Jaime Gutierrez, soy Full Stack Developer del Boot Camp Soy Henry, Desarrollador de aplicaciones web de la Universidad Nacional y Misión TIC 2022, soy ingeniero en mecatrónica de la universidad de Pamplona, con especialización en Automatización Industrial.  Me apasiona la tecnología y siempre me he encaminado hacia ella, ya que gracias a esta podemos dar grandes soluciones a problemas comunes de la vida y a otros que no sabíamos que existían, mi objetivo es vivir de esta pasión en el campo de la Ingeniería de Software en específico del desarrollo web.
Me encanta practicar el ciclismo de montana en equipo y disfrutar del aire libre y los hermosos paisajes, también soy amante de las películas y del buen cine. Me siento muy cómodo trabajando en conjunto y colaborando para sacar adelante maravillosos proyectos, además de aportar nuevas ideas para innovar y mejorar las formas en las que se hacen habitualmente las cosas.</>}
           
</p>
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
               {lengua==="eng"?<>Resume</>:<>Currículum</>}
              </a>
            </p>
          )}
        </div>
      </div>
        </Jumbotron>
    );
}

export default AboutMe;