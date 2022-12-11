import React from "react";
import Jumbotron from "./Jumbotron";
import ProyectCard from "./ProyectCard";
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container";
const Proyects=()=>{

const proyects= [
    {
      imgs: [{img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop-tienda.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop-carrito.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop-turno.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop-login.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop-admin.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop-abaut.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop-responsive.jpg", resume:" Este es la explicacion de la imagen de Fondo"},],
      name: "BarberShop App",
      phrace: "Gestiona y administra servicios y productos de Barberías",
      description:"Esta App permite ofrecer a los usuarios la posibilidad de comprar productos y servicios de las sucursales de las barberías inscritas, también implementa la gestión de usuarios según su roll (visitante, usuario, administrador), del cual depende las peticiones que se pueden hacer. Esta app también implementa paralela de pagos a través de la API de Paypal que facilita al usuario la experiencia de la adquisición del servicio.",
      urlrepo:"https://github.com/Riguja89/Barbershop-e-commerce/",
      urldeploy:"https://barbershop-front-deploy.vercel.app/",
      usedTecnologies:[" React js, TypeScript, Redux, Mongodb, Mongoose, Express Js, Node Js, Tailwincss, Firebase."]
    },
    {
        imgs: [{img:"/static/proyects/game-landing.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
        {img:"/static/proyects/game-home.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
        {img:"/static/proyects/game-detail.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
        {img:"/static/proyects/game-about.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
        {img:"/static/proyects/game-create.jpg", resume:" Este es la explicacion de la imagen de Fondo"},],
        name: "Video-Games APP",
        phrace: "App para buscar y filtrar Videojuegos existentes",
        description:"2 Esta es la desciocion para el proyecto en cuestin y sirve para prueva de como se veria un proyecto par ami portfolio",
        urlrepo:"https://github.com/Riguja89/VideoGames",
        urldeploy:"https://videogame-clien-api.vercel.app/",
        usedTecnologies:[" React Js, Redux, Node JS, Express JS, Sequelize, Postgesql, Html, CSS "]
    },
    {
      imgs: [{img:"/static/proyects/Weather-home.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/Weather-detail.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/Weather-detail2.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/Weather-about.jpg", resume:" Este es la explicacion de la imagen de Fondo"},],
      name: "My - Weather App",
      phrace: "App para buscar el clima de cualquier ciudad del mundo",
      description:"Esta aplicación fue creada como una de las homeworks para el bootcamp #Soyhenry de desarrollo Web Full Stack, con el fin de afianzar y practicar los conocimientos adquiridos en FrontEnd",
      urlrepo:"https://github.com/Riguja89/Weather-APP",
      urldeploy:"https://weather-app-x37q.vercel.app/",
      usedTecnologies:["CSS, HTML, Javascipt, React JS, Axios, Fetch, Reac-Router"]
  },
  
  ]

    return(
        <Jumbotron      
        fluid
        id="proyects"
        style={{
          background: `linear-gradient(136deg, #4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1)`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
          <Container className="">
            <h2 className="display-4 mb-5 text-center"> Recent Projects</h2>
            <Row>
                {proyects.map((proyecto)=>(
                    <ProyectCard 
                    key={proyecto.name}
                    name={proyecto.name} 
                    phrace={proyecto.phrace}
                    description={proyecto.description}
                    urlrepo={proyecto.urlrepo}
                    urldeploy={proyecto.urldeploy}
                    usedTecnologies={proyecto.usedTecnologies}
                    imgs={proyecto.imgs}  >
                                        

                    </ProyectCard>
                ))}
            
            </Row>
            </Container>
        </Jumbotron>
    )
}

export default Proyects;