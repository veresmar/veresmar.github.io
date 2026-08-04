import './Projects.css';


const projects = [
  {
    name: 'ToDo App',
    slug: 'https://e-commerce-app-ten-amber-59.vercel.app/',
    description: "A task management SPA built from scratch",
    stack: 'React, TypeScript',
    myRole: 'Developed a task management SPA from scratch. Built reusable components, implemented CRUD operations, task filtering, validated forms, LocalStorage persistence, and type-safe data flow using a component-based architecture and modern React patterns.'
  },
  {
    name: 'Yep!',
    slug: 'https://yepagency.ru/en',
    description: 'Advertising agency',
    stack: 'JS, SvelteKit',
    myRole: 'Owned frontend implementation, centralized application data, built reusable UI components, optimized video delivery, and worked within a custom design system.'
  },
  {
    name: 'Petrick',
    slug: 'https://www.petrick.co/',
    description: 'Animation studio',
    stack: 'SvelteKit, Scss, PUG',
    myRole: 'Implemented project filtering, integrated Cloudinary, optimized video delivery, and worked within a custom design system.'
  },
  {
    name: 'Shift',
    slug: 'https://shift.dodobrands.io/en/',
    description: "Guidelines for the Dodo Pizza creative teams",
    stack: 'PUG, Scss',
    myRole: 'Introduced centralized JavaScript data structures and built reusable Pug mixins to automate related-content generation.'
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
                    <p className='myRole'><span>My Role: </span>{project.myRole}</p>
                  </div>
                </a>
              </article>
            ))}
          
        </div>
      </section>
    </>
  );
};

