import './Projects.css';


const projects = [
  {
    name: 'ToDo App',
    slug: 'https://e-commerce-app-ten-amber-59.vercel.app/',
    description: "A task management SPA built from scratch",
    stack: 'React, TypeScript'
  },
  {
    name: 'Petrick',
    slug: 'https://www.petrick.co/',
    description: 'Animation studio',
    stack: 'SvelteKit, Scss, PUG'
  },
  {
    name: 'Yep!',
    slug: 'https://yepagency.ru/en',
    description: 'Advertising agency',
    stack: 'JS, SvelteKit'
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
        <div id="projectsList" className="projectsList">
          <h2>Projects</h2>
         
            {projects.map(project => (
              <article className='project' key={project.name}>
                <a href={project.slug} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website`}>
                  <div className="text-wrap">
                    <div className="description">
                      <p>{project.description}</p>
                      <p>{project.stack}</p>
                    </div>

                    <h3>{project.name}</h3>
                  </div>
                </a>
              </article>
            ))}
          
        </div>
      </section>
    </>
  );
};

