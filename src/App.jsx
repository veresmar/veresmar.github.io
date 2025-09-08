
import { Routes, Route } from "react-router-dom";
import './styles/vars.css';
import './styles/global.css';
import './styles/project.css';
import './styles/App.css';
import { AboutMe }  from './components/About/About.jsx';
import { Projects }  from './components/ProjectsList/Projects.jsx';
console.log('✨⭐️✨ Hello, World! ✨⭐️✨') 
// import { Projects }  from './components/ProjectsList/Projects.jsx';
// import { Contacts }  from './components/Contacts/Contacts.jsx';
import CustomCursor from "./components/Cursor/Cursor.jsx";


function Home() {
  return (
    <>
      <CustomCursor />
      <header>
        <div className="header-content">
          <h1>Maria Veres, frontend developer.</h1>
          <a href="mailto:veres.maria.dev@gmail.com" target='_blanc'>contact</a>
        </div>
      </header>
      <main>
        <AboutMe />
        <Projects />
      </main>
      <footer>
        {/* <Contacts /> */}
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
