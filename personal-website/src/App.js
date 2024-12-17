import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Education from './Components/Education';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Education />
    </div>
  );
}

export default App;
