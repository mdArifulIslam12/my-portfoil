
import { useEffect, useState } from 'react';
import './App.css';
import {Preloader } from './Components/Pre'
import {Navbarjsx}  from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import  ScrollToTop  from "./Components/Scroll/Scrolltotop";
import  {Home}  from "./Components/Home/Home";
import {About}  from "./Components/About/About";
import {Home2}  from "./Components/Home/Home2";
import  {Projects} from "./Components/Projects/Projects";
import  {Contact}  from "./Components/Contact/Contact";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
// import { Particle } from "./Components/Home/Particle";

function App() {
  const [load, setload] =useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setload(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbarjsx />
        <section id="#home">
          <Home />
          <Home2 />
        </section>
         <section id="#about">
          <About />
        </section>
       <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
        <section>
          <Footer />
        </section> 
      </div>
    </>
  );
}

export default App;
