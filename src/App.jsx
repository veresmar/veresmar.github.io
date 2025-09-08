
import { Routes, Route } from "react-router-dom";
import './styles/vars.css';
import './styles/global.css';
import { AboutMe }  from './components/About/About.jsx';
import { Projects }  from './components/ProjectsList/Projects.jsx';
import { ContactButton } from "./components/ContactButton/ContactButton.jsx";
import CustomCursor from "./components/Cursor/Cursor.jsx";
console.log('✨⭐️✨ Hello, World! ✨⭐️✨');


function Home() {
  return (
    <>
      <div className="desktop-only">
        <CustomCursor />
      </div>
      <header>
        <div className="header-content">
          <h1>Maria Veres, frontend developer.</h1>
          <ContactButton />
        </div>
      </header>
      <main>
        <AboutMe />
        <Projects />
      </main>
      <footer>
        <div className="center-position">
          <ContactButton />
        </div> 
      </footer>
    </>
  );
}


function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    
  );
}

export default App;
