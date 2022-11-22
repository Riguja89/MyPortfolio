
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import AboutMe from './components/AboutMe';
import NavBar from './components/NavBar';
import Proyects from './components/Proyects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import React from 'react';
function App() {
  return (
    <React.Fragment>  
      <NavBar/>
    <Routes>   
    <Route path="/" element={<>
    <Home/>
    <AboutMe/>
    <Proyects/>
    <Skills/>
    <Footer/>
      </>} />
  
    
  

    </Routes>  
    </React.Fragment>
  );
}

export default App;
