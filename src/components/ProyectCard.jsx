import React from "react";
import {Window,Github } from 'react-bootstrap-icons';
import Card from "react-bootstrap/Card"
import SlideImage from "./SlideImage";
import Col from "react-bootstrap/Col"
import Accordion from 'react-bootstrap/Accordion';

const ProyectCard=(props)=>{

    return(
        <Col md={6}>
        <Card className="card card-outline-dark shadow-lg bg-light my-3 p-2">
            <SlideImage imgs={props.imgs}></SlideImage>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle>{props.phrace}</Card.Subtitle>
            <Card.Text>
            <Accordion className="bg-light" >
            <Accordion.Header >Ver mas ...</Accordion.Header>
        <Accordion.Body className="lead2 bg-light">
        {props.description}
        </Accordion.Body>
            </Accordion>
            
            </Card.Text>
            <div>
            <a href={props.urlrepo} target="_blank" className="btn btn-outline-dark btn-md "> 
            <Github  size={20} className="m-2"/>
            Repo
            </a>

            <a href={props.urldeploy} target="_blank" className="btn btn-outline-dark btn-md m-2"> 
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