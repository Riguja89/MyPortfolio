import React from "react";
import {Window,Github } from 'react-bootstrap-icons';
import Card from "react-bootstrap/Card"

const ProyectCard=(props)=>{

    return(
        <Card border="dark" className="card card-outline-dark bg-dark my-3 p-2">
            <img src="" alt="image-proyect" />
           
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>{props.phrace}</Card.Subtitle>
            <Card.Text>{props.description}</Card.Text>
            <div>
            <a href={props.urlrepo} target="_blank" className="btn btn-outline-light btn-lg "> 
            <Github  size={20} className="m-2"/>
            Repo
            </a>

            <a href={props.urlrdeploy} target="_blank" className="btn btn-outline-light btn-lg m-2"> 
            <Window size={20} className="m-2" />
             Deploy
            </a>
            </div>
            <hr />
            <p > Tecnologías usadas: 
            {props.usedTecnologies?(props.usedTecnologies.map(tec=>(
                <>{ tec} </>
            ))):(<></>)}

            </p>
        

        </Card>
    );
}

export default ProyectCard;