import './Projects.css';
import { Link } from "react-router-dom";
import dodoLogo from './img/1.jpg';
import petrickLogo from './img/2.jpg';
import yepLogo from './img/3.jpg';

const projects = [
  {
    name: 'Dodo TV menu',
    slug: '/dodo-pizza-tv-menu',
    img: dodoLogo,
    description: "tool for Dodo Pizza's managers"
  },
  {
    name: 'Shift',
    slug: '/dodo-pizza-shift',
    img: petrickLogo,
    description: "website with tutorials for Dodo Pizza's creative teams"
  },
  {
    name: 'Petrick',
    slug: '/petrick-website',
    img: yepLogo,
    description: "animation studio's website"
  },
  {
    name: 'Yep!',
    slug: '/yep-website',
    img: dodoLogo,
    description: ''
  }
];



export const Projects = () => {
  return (
    <>
      <section className='projects'>
      <h3>Here're some projects I've been working on</h3>
      <div className="wrap">
      <ul className='projects-list'>
        {projects.map((project, index) => (
          <li className='project-item' key={index}>
            <img src={project.img} alt={project.name} />
            <Link to={`/projects${project.slug}`}>
              <h4>{project.name}</h4>
            </Link>
          </li>
        ))}
      </ul>
      </div>
      {/* <div className="wave-down"></div> */}
      </section>
    </>
  );
};

