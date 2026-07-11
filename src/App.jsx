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

        <Journey />

        <Skills />

        <Experience />

        <Projects />

        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;