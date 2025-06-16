import './Projects.css';
import intuition from './img/intuition.png';
import petrick from './img/petrick.png';
import shift from './img/shift.png';
import tvmenu from './img/tv-menu.png';
import yep from './img/yep.png';

export const Projects = () => (
  <section className="projects-wrap">
   
  <div id="projects" className="projects">
    <div className="about-section">

    <h2>About</h2>
    <p>I spent three years at <a href="https://intuition.team/about" target='_blanc'>Intuition Design Bureau</a>, where I worked side by side with designers, developers, and project managers. That time taught me how much I value being part of a team that not only builds things together, but also shares the reasoning behind every decision — always keeping the user and the client in mind.</p><br/>
    <p>My background is rooted in semantic layout and styling (HTML, Pug, CSS/SCSS), but I’ve steadily taken on more responsibility in the front-end layer — working with JavaScript, building interactive components, and expanding my focus to include not only layout and design, but also structure, interaction, and front-end logic.</p><br/>
    <p>Now, I’m ready to go further: to deepen my skills in modern frameworks, accessibility, and best practices — and to continue evolving as a developer by learning from skilled teammates and contributing to thoughtful, user-centered products.</p>
    <br/>
    
      <p className='place'>Currently living in Amsterdam, Netherlands 🇳🇱</p>
    
    </div>
    <h2>Click on the projects below</h2>
    <div className="project">
      <img src={yep} alt="The website of advertising agency. The screensot of the main page" />
      
      <div className="text-wrap">
      <h2>Yep</h2>
      <p className="technology">JS, Svelte</p>
      <p>The website of advertising agency.</p>
      
      <p className="i-did">What I did: </p>
      <ul>
        developed interactive components on Svelte:
        <li>- video slider with cursor response,</li> 
        <li>- dynamic navigation with active link indicator,</li>
        <li>- tags,</li>
        <li>- “next page” component addressing JS project database;</li>
        <li>- through the same database I configured filtering of projects, their display on the main page</li>
      </ul>
      </div>
      <a href="https://yepagency.ru/" target='_blanc'></a>
    </div>

     <div className="project">
      <img src={petrick} alt="The website for animation studio. The screensot of the main page" />
      <div className="text-wrap">
      <h2>Petrik</h2>
      <p className="technology">Svelte, Scss, PUG</p>
        <p>The website for animation studio.</p>
        <p className="i-did">What I did: </p>
        <ul>
          <li>- made adaptive layouts for projects, according to Figma/ Photoshop/ Behance designs  
          </li>
          </ul>
      </div>
        <a href="https://www.petrick.co/" target='_blanc'></a>
    </div>

    <div className="project">
      <img src={shift} alt="The website with guides for creative teams. The screensot of the main page" />
      <div className="text-wrap">

      <h2>Dodo Shift</h2>
       <p className="technology">PUG, Scss</p>
        <p>The website with guides for creative teams</p>
 
      <p className="i-did">What I did: </p>
        <ul>
            <li>⁃ did js-menu on the main page, automatic display of the number of guides in each topic,</li>
            <li> ⁃ pug components,</li>
            <li> ⁃ and made a lot of guides web pages.</li>
          </ul>
          
      </div>
        <a href="https://shift.dodobrands.io/en/" target='_blanc'></a>
    </div>

    <div className="project">
      <img src={tvmenu} alt="A tool for marketers, helping to update layouts on the pizzeria screens. The screensot of the main page" />
      <div className="text-wrap">

      <h2>Dodo TV-menu</h2>
      <p className="technology">JS</p>
        <p>A tool for marketers, helping to update layouts on the pizzeria screens</p>
        <p className="i-did">What I did: </p>
        <ul>
          <li>- implemented filtering of layouts by data-attributes,</li>
          <li>- made previous selection memorization via Local Storage,</li>
          <li>- made an adaptive layout.</li>
        </ul>
      
      </div>
        <a href="https://intuition-tech.github.io/tv-menu-monitor.github.io/" target='_blanc'></a>
    </div>

    <div className="project">
      <img src={intuition} alt="The website for animation design bureau. The screensot of the main page" />
      <div className="text-wrap">

      <h2>Intuition</h2>
      <p className="technology">Svelte, Scss, PUG</p>
        <p>The website for animation design bureau</p>
        <p className="i-did">What I did: </p>
     
        <ul>
          remade the book chapters:
          <li>turned the Pug layout (from the old website) into Svelte components on <a href="https://intuition.team/ru/complex-designer-summary">the new one</a></li>
        </ul>
      </div>
        <a href="https://intuition.team/about" target='_blanc'></a>
    </div>

  </div>
  </section>
  
);
