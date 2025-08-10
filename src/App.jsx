import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Techno from "./Components/Techno";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Background from "./Components/Background";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
     
      <div>
        <Background/>
      </div>
      <div className="container mx-auto px-0">
        <Navbar />
        <Hero />
        <About />
        <Techno />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default App;
