import React from "react";
import Card from 'react-bootstrap/Card';

const SoftSkillCard=(prop)=>{
 
    return(
        <Card className="bg-s econdary cardskill">
            <Card.Img className="icontech"  src={prop.img} />
            <Card.Body>
               {prop.name}
            </Card.Body>
       
      </Card>
    );
}

export default SoftSkillCard;