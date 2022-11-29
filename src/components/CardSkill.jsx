import React from "react";
import Card from 'react-bootstrap/Card';

const CardSkills=(prop)=>{
 
    return(
        <Card className="bg-secondary cardskill">
            <Card.Img className="icontech"  src={prop.img} />
            <Card.Body>
               {prop.name}
            </Card.Body>
       
      </Card>
    );
}

export default CardSkills;