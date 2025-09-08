import './Projects.css';
import { Link } from "react-router-dom";


const projects = [
  {
    name: 'Petrick',
    slug: 'https://www.petrick.co/',
    description: 'animation studio',
    stack: 'Svelte, Scss, PUG'
  },
  {
    name: 'Yep!',
    slug: 'https://yepagency.ru/en',
    description: 'advertising agency',
    stack: 'JS, Svelte'
  },
  {
    name: 'Shift',
    slug: 'https://shift.dodobrands.io/en/',
    description: "Guidelines for the Dodo Pizza creative teams",
    stack: 'PUG, Scss'
  }
  
];



export const Projects = () => {
  return (
    <>
      <section className="projects-wrap">
        <div id="projects" className="projects">
          <h2>Projects</h2>
          <div className='projects'>
            {projects.map((project, index) => (
              <div className='project' key={index}>
                  <div className="text-wrap">
                    <div className="description">
                      <p>{project.description}</p>
                      <p>{project.stack}</p>
                    </div>

                    <h3>{project.name}</h3>
                  </div>
                <Link to={project.slug} target='_blanc'>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

