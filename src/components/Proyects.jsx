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
      {img:"/static/proyects/barbershop-abaut.jpg", resume:" Este es la explicacion de la imagen de Fondo"},],
      name: "BarberShop App",
      phrace: "App E-commerce para ofrecer, gestionar y administrar servicios y productos de Barberías",
      description:"Esta es la desciocion para el proyecto en cuestin y sirve para prueva de como se veria un proyecto par ami portfolio",
      urlrepo:"https://github.com/Riguja89/Barbershop-e-commerce/",
      urldeploy:"https://barbershop-front-deploy.vercel.app/",
      usedTecnologies:[" React js, TypeScript, Redux, Mongodb, Mongoose, Express Js, Node Js, Tailwincss, Firebase."]
    },
    {
        imgs: [{img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
        {img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
        {img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
        {img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},],
        name: "Proyecto 2",
        phrace: "Proyecto para ver proyecto 2",
        description:"2 Esta es la desciocion para el proyecto en cuestin y sirve para prueva de como se veria un proyecto par ami portfolio",
        urlrepo:"https://github.com/riguja89/",
        urldeploy:"https://www.facebook.com/jaimegr1/",
        usedTecnologies:["React: 80%", "Redux", "Expres"]
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