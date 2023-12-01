import React from "react";
import Jumbotron from "./Jumbotron";
import ProyectCard from "./ProyectCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
const Proyects = ({ lengua }) => {
  const proyects = [
    {
      imgs: [
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/barbershop.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/barbershop-tienda.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/barbershop-carrito.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/barbershop-turno.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/barbershop-login.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/barbershop-admin.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/barbershop-abaut.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/barbershop-responsive.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
      ],
      name: "BarberShop App",
      phrace:
        lengua === "eng"
          ? "Manage and administer barbershop services and products."
          : "Gestiona y administra servicios y productos de barberías.",
      description:
        lengua === "eng"
          ? "This App allows users to be offered the possibility of buying products and services from registered barbershop branches, it also implements user management according to their role (visitor, user, administrator), on which the requests that can be made depend. This app also implements parallel payments through the Paypal API that facilitates the user's experience of acquiring the service."
          : "Esta App permite ofrecer a los usuarios la posibilidad de comprar productos y servicios de las sucursales de las barberías inscritas, también implementa la gestión de usuarios según su roll (visitante, usuario, administrador), del cual depende las peticiones que se pueden hacer. Esta app también implementa paralela de pagos a través de la API de Paypal que facilita al usuario la experiencia de la adquisición del servicio.",
      urlrepo: "https://github.com/Riguja89/Barbershop-e-commerce/",
      urldeploy: "https://barbershop-front-deploy.vercel.app/",
      usedTecnologies: [
        " React js, TypeScript, Redux, Mongodb, Mongoose, Express Js, Node Js, Tailwincss, Firebase.",
      ],
    },
    {
      imgs: [
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/eost-mobile-home.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/eost-desktop-home.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
      ],
      name: "Eos Landing page",
      phrace:
        lengua === "eng"
          ? "Dashboard-type home page for the EOS company"
          : "Página de inicio tipo dashboard para la empresa EOS",
      description:
        lengua === "eng"
          ? "Eos Landing Page was built as a demonstration of knowledge in VUE.js the technical test for the EOS company"
          : "Eos Landing Page fue construida como demostracion de conocimiento en VUE.js la prueba tecnica para la empres EOS",
      urlrepo: "https://github.com/Riguja89/eos-test",
      urldeploy: "https://eos-test-tau.vercel.app/",
      usedTecnologies: [
        " Vue Js, SCSS, Html, CSS. ",
      ],
    },
    {
      imgs: [
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/brahma--home__001.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/brahma--menu__002.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/brahma--products__003.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/brahma--product__004.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/brahma--responsive__005.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
      ],
      name: "Brahma E-commerce",
      phrace:
        lengua === "eng"
          ? "Official Brahma e-commerce replica."
          : "Réplica del e-commerce de Brahma oficial.",
      description:
        lengua === "eng"
          ? "This replica allows users to make a purchase by completing the complete cycle of the product, from the window to the checkout and payment."
          : "Esta replica permite a los usuarios hacer una compra  haciendo el ciclo completo del producto, desde la vitrina hasta llegar al checkout y pago.",
      urlrepo: "https://github.com/Riguja89/store-theme-brahma",
      urldeploy: "https://riguja89.github.io/MyPortfolio/#proyects",
      usedTecnologies: [" React js, TypeScript, Vtex IO, HTM, CSS"],
    },

    {
      imgs: [
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/solucionsoft-desktop-home.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/solucionsoft-desktop-home2.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/solucionsoft-desktop-home3.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/solucionsoft-desktop-home4.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/solucionsoft-mobile-home4.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
      ],
      name: "Solucion Soft",
      phrace:
        lengua === "eng"
          ? "Main page for the company SolucionSoft"
          : "Página principal para la compañia SolucionSoft",
      description:
        lengua === "eng"
          ? "Main page of information and contact for the company Soft Solution, made following full pixel perfect according to the Figma document provided by the company."
          : "Página principal de información y contacto para la empresa Solución Soft, realizada siguiendo a cabalidad pixel perfect según documento Figma aportado por la compañía. ",
      urlrepo: "https://github.com/Riguja89/solucionsofttest",
      urldeploy: " https://solucionsofttest.vercel.app/",
      usedTecnologies: [
        " React Js, SCSS, Html, CSS, WhatsApp api",
      ],
    },
   
    {
      imgs: [
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/game-landing.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/game-home.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/game-detail.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/game-about.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/game-create.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
      ],
      name: "Video-Games APP",
      phrace:
        lengua === "eng"
          ? "App to search and filter existing video games."
          : "App para buscar y filtrar Videojuegos existentes",
      description:
        lengua === "eng"
          ? "Videgames App was built as an individual project of the Soy Henry BootCamp, it allows global searches of existing videogames worldwide, once the search is complete it brings a list of videogames which are shown in a preliminary way, filters can be applied to this list by genres and also allows you to sort them in such a way that you can find exactly the game you are looking for and consult its details; It also allows you to create personalized video games and store them in a database so that they can be consulted and deleted whenever you want."
          : "Videgames App fue construida como proyecto individual del BootCamp Soy Henry, permite hacer búsquedas globales de videojuegos existentes a nivel mundial, una vez la búsqueda se completa trae un listado de videojuegos los cuales son mostrados de forma preliminar, a este listado se le puede aplicar filtros por géneros y también permite ordenarlos de tal forma que se pueda encontrar exactamente el juego que se busca y consultar los detalles de este; también permite crear videojuegos personalizados y almacenarlos en una base de datos de tal forma que se puedan consultar y eliminar cuando se deseen.",
      urlrepo: "https://github.com/Riguja89/VideoGames",
      urldeploy: "https://videogame-clien-api.vercel.app/",
      usedTecnologies: [
        " React Js, Redux, Node JS, Express JS, Sequelize, Postgesql, Html, CSS. ",
      ],
    },
    {
      imgs: [
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/Weather-home.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/Weather-detail.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/Weather-detail2.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/Weather-about.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
      ],
      name: "My - Weather App",
      phrace:
        lengua === "eng"
          ? "App to find the weather of any city in the world"
          : "App para buscar el clima de cualquier ciudad del mundo",
      description:
        lengua === "eng"
          ? "This application was created as one of the homeworks for the #Soyhenry Full Stack Web development bootcamp, in order to consolidate and practice the knowledge acquired in FrontEnd"
          : "Esta aplicación fue creada como una de las homeworks para el bootcamp #Soyhenry de desarrollo Web Full Stack, con el fin de afianzar y practicar los conocimientos adquiridos en FrontEnd",
      urlrepo: "https://github.com/Riguja89/Weather-APP",
      urldeploy: "https://weather-app-x37q.vercel.app/",
      usedTecnologies: [
        "CSS, HTML, Javascipt, React JS, Axios, Fetch, Reac-Router.",
      ],
    },
    {
      imgs: [
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/portfolio-home.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/portfolio-aboutme.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/portfolio-projects.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
        {
          img: "https://raw.githubusercontent.com/Riguja89/MyPortfolio/main/public/static/proyects/portfolio-skills.jpg",
          resume: " Este es la explicacion de la imagen de Fondo",
        },
      ],
      name: "My - Portfolio",
      phrace:
        lengua === "eng"
          ? "The personal website/portfolio of Jaime Gutierrez"
          : "Sitio personal / Portafolio de Jaime Gutierrez",
      description:
        lengua === "eng"
          ? "Creation of Jaime Gutierrez's personal website or portfolio as a Full Stack developer where the most relevant projects and skills are shown"
          : "Creacion del sitio Wep personal o portafolio como desarrollador Full Stack de Jaime Gutierrez donde se muestran los proyectos y habilidades mas relevantes",
      urlrepo: "https://github.com/Riguja89/MyPortfolio",
      urldeploy: "https://riguja89.github.io/MyPortfolio/",
      usedTecnologies: [
        "CSS, HTML, Javascipt, React JS, Bootstrap, Saas, Reac-Router.",
      ],
    },
  ];

  return (
    <Jumbotron
      fluid
      id="proyects"
      style={{
        background:
          "linear-gradient(rgb(220 182 182 / 36%), rgb(236 213 213 / 33%))",
      }}
      className="title text-dark min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <Container>
        <h2 className="display-4 mb-5 text-center">
          {" "}
          {lengua === "eng" ? "Recent Projects" : "Proyectos Recientes"}
        </h2>
        <Row>
          {proyects.map((proyecto, i) => (
            <ProyectCard
              key={i}
              name={proyecto.name}
              phrace={proyecto.phrace}
              description={proyecto.description}
              urlrepo={proyecto.urlrepo}
              urldeploy={proyecto.urldeploy}
              usedTecnologies={proyecto.usedTecnologies}
              imgs={proyecto.imgs}
              lengua={lengua}
            ></ProyectCard>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Proyects;
