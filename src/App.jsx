
import { Routes, Route } from "react-router-dom";
import './styles/vars.css';
import './styles/global.css';
import './styles/project.css';
import './styles/App.css';
import { AboutMe }  from './components/About/About.jsx';
import { Projects }  from './components/Projects/Projects.jsx';
// import { Projects }  from './components/ProjectsList/Projects.jsx';
import { Contacts }  from './components/Contacts/Contacts.jsx';
import DodoPizzaShift from './projects/dodo-pizza-shift/dodo-pizza-shift.jsx';
import DodoPizzaTV from './projects/dodo-pizza-tv-menu/dodo-pizza-tv-menu.jsx';
import Petrick from './projects/petrick-website/petrick-website.jsx';
import Yep from './projects/yep-website/yep-website.jsx';


function Home() {
  return (
    <>
      <header>
        <AboutMe />
      </header>
      <main>
        <Projects />
      </main>
      <footer>
        <Contacts />
      </footer>
    </>
  );
}


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/dodo-pizza-tv-menu" element={<DodoPizzaTV />} />
        <Route path="/projects/dodo-pizza-shift" element={<DodoPizzaShift />} />
        <Route path="/projects/petrick-website" element={<Petrick />} />
        <Route path="/projects/yep-website" element={<Yep />} />
      </Routes>
    
  );
}

export default App;
