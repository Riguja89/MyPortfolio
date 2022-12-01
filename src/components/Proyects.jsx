import React from "react";
import Jumbotron from "./Jumbotron";
import ProyectCard from "./ProyectCard";

const Proyects=()=>{

const proyects= [
    {
      imgs: [{img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},
      {img:"/static/proyects/barbershop.jpg", resume:" Este es la explicacion de la imagen de Fondo"},],
      name: "BarberShop App",
      phrace: "proyecot para ver proyecto 1",
      description:"Esta es la desciocion para el proyecto en cuestin y sirve para prueva de como se veria un proyecto par ami portfolio",
      urlrepo:"https://github.com/riguja89/",
      urldeploy:"https://www.facebook.com/jaimegr1/",
      usedTecnologies:["React", "Redux", "Expres"]
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
            <h1 className="display-3 mb-5 text-center"> Recent Projects</h1>
            <div  className="p-5 ">
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
            </div>
        </Jumbotron>
    )
}

export default Proyects;