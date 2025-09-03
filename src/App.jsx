
import { Routes, Route } from "react-router-dom";
import './styles/vars.css';
import './styles/global.css';
import './styles/project.css';
import './styles/App.css';
import { AboutMe }  from './components/About/About.jsx';
import { Projects }  from './components/Projects/Projects.jsx';
console.log('💚 brat 💚') 
// import { Projects }  from './components/ProjectsList/Projects.jsx';
// import { Contacts }  from './components/Contacts/Contacts.jsx';



function Home() {
  return (
    <>
      <header>
        <div className="header-text">

          <h1>Maria Veres, frontend developer.</h1>
          {/* <p>Amsterdam, Netherlands</p> */}
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
