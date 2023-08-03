import Touch from './component/Touch';
import './App.css';
import About from './component/About';
import AboutMe from './component/AboutMe';
import Approch from './component/Approch';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import Servces from './component/Servces';
import Skills from './component/Skills';
import Work from './component/Work';
import Experirnce from './component/Experirnce';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <AboutMe/>
      <Servces/>
      <Work/>
      <Approch/>
      <Skills/>
      <Blog/>
      <Touch/>
      <Experirnce/>
      <Contact/>
      <Footer/>
    </div>
  );
}
//{}[]
export default App;
