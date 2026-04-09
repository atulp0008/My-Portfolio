import Navbar from "./components/Navbar"
import ParticleBackground from "./components/ParticleBackground"
import About from "./section/About";
import Home from "./section/Home";
import Skills from "./section/Skills";
import Project from "./section/Project";
import Experience from "./section/Experience";
import Testimonial from "./section/Testimonial";
import Contact from "./section/Contact";

import Footer from "./section/Footer";


function App() {
  

  return (
    <div className="relative gradient text-white">
      <ParticleBackground/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Testimonial/>
      <Contact/>
      <Footer/>



    </div>
     
    
  )
}

export default App
