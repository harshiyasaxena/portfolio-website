import { BrowserRouter } from "react-router-dom";

import {
  Contact,
  Experience,
  Hero,
  Navbar,
  Skills,
  StarsCanvas,
} from "./components";

import Journey from "./components/Journey/Journey";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* 1. Journey Anchor Wrapper */}
        <section id="journey" className="pt-20">
          <Journey />
        </section>

        {/* 2. Skills Anchor Wrapper */}
        <section id="skills" className="pt-20">
          <Skills />
        </section>

        {/* 3. Experience Anchor Wrapper */}
        <section id="experience" className="pt-20">
          <Experience />
        </section>

        {/* 4. Projects Anchor Wrapper */}
        <section id="projects" className="pt-20">
          <Projects />
        </section>

        {/* 5. Contact Anchor Wrapper */}
        <section id="contact" className="pt-20">
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;