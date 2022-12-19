
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import React,{useState} from 'react';
import Mailme from './components/Mailme';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
const[lengua, setLengua]=useState("eng")
function toggleLengua(lengua){
  setLengua(lengua);
}

  return (
    <React.Fragment>  
      <NavBar setLengua={toggleLengua} lengua={lengua}/>
    <Mailme lengua={lengua}/>
    <Home lengua={lengua}/>
    <AboutMe lengua={lengua}/>
    <Proyects lengua={lengua}/>
    <Skills lengua={lengua}/>
    <Footer lengua={lengua}/>
    <Routes>   
    <Route path="/" element={<>
   
      </>} />
  
    
  

    </Routes>  
    </React.Fragment>
  );
}

export default App;
