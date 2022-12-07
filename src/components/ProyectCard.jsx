import React from "react";
import {Window,Github } from 'react-bootstrap-icons';
import Card from "react-bootstrap/Card"
import SlideImage from "./SlideImage";
import Col from "react-bootstrap/Col"
import Accordion from 'react-bootstrap/Accordion';

const ProyectCard=(props)=>{

    return(
        <Col md={6}>
        <Card border="dark" className="card card-outline-dark bg-dark my-3 p-2">
            <SlideImage imgs={props.imgs}></SlideImage>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>{props.phrace}</Card.Subtitle>
            <Card.Text>
            <Accordion className="dark">
            <Accordion.Header>Ver mas ...</Accordion.Header>
        <Accordion.Body>
        {props.description}
        </Accordion.Body>
            </Accordion>
            
            </Card.Text>
            <div>
            <a href={props.urlrepo} target="_blank" className="btn btn-outline-light btn-lg "> 
            <Github  size={20} className="m-2"/>
            Repo
            </a>

            <a href={props.urldeploy} target="_blank" className="btn btn-outline-light btn-lg m-2"> 
            <Window size={20} className="m-2" />
             Deploy
            </a>
            </div>
          
            <p > Tecnologías usadas: 
            {props.usedTecnologies?(props.usedTecnologies.map(tec=>(
                <>{ tec} </>
            ))):(<></>)}

            </p>
        

        </Card>
        </Col>
    );
}

export default ProyectCard;