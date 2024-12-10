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
      {/* <div className="fixed inset-0 -z-10">
        <div class="relative h-full w-full bg-black">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ff80002e_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:14px_24px]">
            
          </div>
          <div class="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_500px_at_50%_300px,#ff800036,#0000)]">

          </div>
        </div>
      </div> */}
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
