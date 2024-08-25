import logo from './logo.svg';
// import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Portofolio from './Components/Portofolio/Portofolio';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Home/>
       <About/>
       <Skills/>
       <Portofolio/>
       <Footer/>
    </div>
  );
}

export default App;
