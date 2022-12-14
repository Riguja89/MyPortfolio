import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "./Jumbotron";

const Home=({lengua})=>{

    const icons= [
        {
          image: "fa-github",
          url: "https://github.com/riguja89/",
        },
        {
          image: "fa-facebook",
          url: "https://www.facebook.com/jaimegr1/",
        },
        // {
        //   image: "fa-instagram",
        //   url: "https://www.instagram.com/hashirshoaeb/",
        // },
        {
          image: "fa-linkedin",
          url: "https://www.linkedin.com/in/jaime-gutierrez-rios-b3143662/",
        },
        {
          image: "fa-twitter",
          url: "https://twitter.com/JaimeGu15467988",
        },
      ]

    return(
        
            <Jumbotron
        fluid
        id="home"
        // style={{
        //   background: `linear-gradient(136deg, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1)`,
        //   backgroundSize: "1200% 1200%",
        // }}
        // className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        className="wrapper"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1  className="display-1">
          Jaime Gutierrez
          </h1>
          {/* <Typist> */}
            <div className="lead typist text-center">
            {lengua==="eng"?<>Full Stack Developer | Ingineer | Programmer | Cyclist | Movie Lover</>:
            <>Desarrollador Full Stack | Ingeniero | Programador | Ciclista | Amante del cine</>}
            </div>
          {/* </Typist> */}
          <div className="p-5 ">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
                className="p-2"
              >
                <i className={`fab ${icon.image}  fa-3x socialicons `} />
               
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
           
            {lengua==="eng"?<>More about me</>:<>Más sobre mi</>}
          </a>
        </Container>
      </Jumbotron>
    );
}

export default Home;