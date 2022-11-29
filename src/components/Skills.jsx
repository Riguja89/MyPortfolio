import React from "react";
import CardSkills from "./CardSkill";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const techSkills=[{name:"CSS 3", img:"/static/media/css.svg"},
{name:"Bootstrap",img:"/static/media/bootstrap.svg"},
{name:"HTML", img:"/static/media/html5.svg"},
{name:"Java", img:"/static/media/java.svg"},
{name:"JavaScript", img:"/static/media/javascript.svg"},
{name:"MongoDB", img:"/static/media/mongo.svg"},
{name:"Postgresql", img:"/static/media/postgresql.svg"},
{name:"Python", img:"/static/media/python.svg"},
{name:"React", img:"/static/media/react.svg"},
{name:"Redux", img:"/static/media/redux.svg"},
{name:"Sequelize", img:"/static/media/sequelize.svg"},
{name:"Tailwind", img:"/static/media/tailwind.svg"},
{name:"Typescript", img:"/static/media/typescript.svg"},
{name:"Vue Js", img:"/static/media/vue.svg"},
{name:"Express", img:"/static/media/express.svg"},
{name:"Django", img:"/static/media/django.svg"},

]
const Skills=()=>{

    return(
        <div id="skills" >
            <h1>Skills</h1>
        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="TechSkills" title="Habilidades Técnica" >
        aca las habilidades tecnias
          <div className="skillcomponent">
            

                {techSkills.map(skill=>(
                     <CardSkills name={skill.name} img={skill.img}>

                     </CardSkills>
                ))};
               

       
          </div>
        </Tab>
        <Tab eventKey="SoftSkills" title="Habilidades Blandas">
          <div>
            Aca van las habilidades blandas
          </div>
        </Tab>
      
      </Tabs>
      </div>
    );
}

export default Skills;