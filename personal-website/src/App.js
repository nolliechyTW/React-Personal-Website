import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Education from './Components/Education';
import CTA from './Components/CTA';
import Experience from './Components/Experience';
import Projects from './Components/Projects'; 
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <CTA />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
