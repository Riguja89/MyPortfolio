import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "./Jumbotron";

const Home=()=>{

    const icons= [
        {
          image: "fa-github",
          url: "https://github.com/riguja89",
        },
        {
          image: "fa-facebook",
          url: "https://www.facebook.com/hashirshoaeb",
        },
        {
          image: "fa-instagram",
          url: "https://www.instagram.com/hashirshoaeb/",
        },
        {
          image: "fa-linkedin",
          url: "https://www.linkedin.com/in/hashirshoaeb/",
        },
        {
          image: "fa-twitter",
          url: "https://www.twitter.com/hashirshoaeb/",
        },
      ]

    return(
        
            <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1)`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1  className="display-1">
          Jaime Gutierrez
          </h1>
          {/* <Typist> */}
            <div className="lead typist">
            Full Stack Developer | Ingineer | Programmer | Cyclist | Movie Lover 
            </div>
          {/* </Typist> */}
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image}  fa-3x socialicons`} />
               
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg "
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
}

export default Home;