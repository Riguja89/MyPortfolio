import React from "react";
import CardSkills from "./CardSkill";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Jumbotron from "./Jumbotron";
import SoftSkillCard from "./SoftSkillCard";

const techSkills=[{name:"CSS", img:"/static/media/css.svg"},
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
{name:"Git", img:"/static/media/git.svg"},
{name:"GitHub", img:"/static/media/github.svg"},

]

const softkills=[
    {name:"Colaboratividad", img:"/static/softskill/colaborativo.svg"},
    {name:"Creatividad", img:"/static/softskill/creativity.svg"},
    {name:"Orientado al Logro", img:"/static/softskill/goaloriented.svg"},
    {name:"Empatía", img:"/static/softskill/empatia.svg"},
    {name:"Positividad", img:"/static/softskill/positivo.svg"},
    {name:"Resolución de problemas", img:"/static/softskill/problemsolving.svg"},
    {name:"Organización", img:"/static/softskill/organizado.svg"},
    {name:"Adaptabilidad", img:"/static/softskill/adaptativo.svg"},

]
const Skills=()=>{

    return(
        <Jumbotron fluid className="bg-white m-0" id="skills" >
            <h1  className="display-4 pb-5 text-center">Skills</h1>
        <Tabs
        defaultActiveKey="TechSkills"
        id="uncontrolled-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="TechSkills" title="Habilidades Técnica" >
        
          <div className="skillcomponent">
            

                {techSkills.map(skill=>(
                     <CardSkills key={skill.name} name={skill.name} img={skill.img}>

                     </CardSkills>
                ))}
               

       
          </div>
        </Tab>
        <Tab eventKey="SoftSkills" title="Habilidades Blandas">
        <div className="skillcomponent">
            

            {softkills.map(skill=>(
                 <SoftSkillCard key={skill.name} name={skill.name} img={skill.img}>

                 </SoftSkillCard>
            ))}
           

   
      </div>
        </Tab>
      
      </Tabs>
      </Jumbotron>
    );
}

export default Skills;