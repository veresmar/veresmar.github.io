import './Projects.css';
import intuition from './img/intuition.png';
import petrick from './img/petrick.png';
import shift from './img/shift.png';
import tvmenu from './img/tv-menu.png';
import yep from './img/yep.png';

export const Projects = () => (
  <section className="projects-wrap">
   
  <div id="projects" className="projects">
    
    <h2>Projects</h2>

    <div className="project">
      <img src={petrick} alt="The website for animation studio. The screensot of the main page" />
      <div className="text-wrap">
        <p>The website for animation studio.</p>
      <h3>Petrik</h3>
        <p className="i-did">What I did: </p>
        <ul>
          <li>- made adaptive layouts for projects, according to Figma/ Photoshop/ Behance designs  
          </li>
        </ul>
      <p className="technology">Svelte, Scss, PUG</p>
      </div>
        <a href="https://www.petrick.co/" target='_blanc'></a>
    </div>
    
    <div className="project">
      <img src={yep} alt="The website of advertising agency. The screensot of the main page" /> 
      <div className="text-wrap">
      <p>The website of advertising agency.</p>
      <h3>Yep</h3>
      <p className="i-did">What I did: </p>
      <ul>
        developed interactive components on Svelte:
        <li>- video slider with cursor response,</li> 
        <li>- dynamic navigation with active link indicator,</li>
        <li>- tags,</li>
        <li>- “next page” component addressing JS project database;</li>
        <li>- through the same database I configured filtering of projects, their display on the main page</li>
      </ul>
      <p className="technology">JS, Svelte</p>
      </div>
      <a href="https://yepagency.ru/" target='_blanc'></a>
    </div>

     

    <div className="project">
      <img src={shift} alt="The website with guides for creative teams. The screensot of the main page" />
      <div className="text-wrap">

        <p>The website with guides for creative teams.</p>
      <h3>Dodo Shift</h3>
 
      <p className="i-did">What I did: </p>
        <ul>
            <li>⁃ did js-menu on the main page, automatic display of the number of guides in each topic,</li>
            <li> ⁃ pug components,</li>
            <li> ⁃ and made a lot of guides web pages.</li>
          </ul>
       <p className="technology">PUG, Scss</p>
          
      </div>
        <a href="https://shift.dodobrands.io/en/" target='_blanc'></a>
    </div>

    <div className="project">
      <img src={tvmenu} alt="A tool for marketers, helping to update layouts on the pizzeria screens. The screensot of the main page" />
     
      <div className="text-wrap">

        <p>A tool for marketers, helping to update layouts on the pizzeria screens.</p>
      <h3>Dodo TV-menu</h3>
        <p className="i-did">What I did: </p>
        <ul>
          <li>- implemented filtering of layouts by data-attributes,</li>
          <li>- made previous selection memorization via Local Storage,</li>
          <li>- made an adaptive layout.</li>
        </ul>
         <p className="technology">JS</p>
      </div>
        <a href="https://intuition-tech.github.io/tv-menu-monitor.github.io/" target='_blanc'></a>
    </div>

    <div className="project">
      <img src={intuition} alt="The website for the design bureau. The screensot of the main page" />
      <div className="text-wrap">

        <p>The website for the design bureau.</p>
      <h3>Intuition</h3>
        <p className="i-did">What I did: </p>
     
        <ul>
          <li>remade the book chapters:</li>
          <li>- turned the Pug layout (from the old website) into Svelte components on <a href="https://intuition.team/ru/complex-designer-summary">the new one</a></li>
        </ul>
      <p className="technology">Svelte, Scss, PUG</p>
      </div>
        <a href="https://intuition.team/about" target='_blanc'></a>
    </div>

  </div>
  </section>
  
);
