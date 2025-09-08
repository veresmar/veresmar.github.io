import './Projects.css';


export const Projects = () => (
  <section className="projects-wrap">
   
  <div id="projects" className="projects">
    <h2>Projects</h2>
    <div className="project">
      <div className="text-wrap">
         <div className="description">
        <p>animation studio</p>
        <p>Svelte, Scss, PUG</p>
         </div>
      <h3>Petrik</h3>
      </div>
        <a href="https://www.petrick.co/" target='_blanc'></a>
    </div>
    

    <div className="project">
      {/* <img src={yep} alt="The website of advertising agency. The screensot of the main page" />  */}
      <div className="text-wrap">
        <div className="description">

      <p>advertising agency</p>
      <p>JS, Svelte</p>
        </div>
      <h3>Yep</h3>
      {/* <p className="i-did">What I did: </p>
      <ul>
        developed interactive components on Svelte:
        <li>- video slider with cursor response,</li> 
        <li>- dynamic navigation with active link indicator,</li>
        <li>- tags,</li>
        <li>- “next page” component addressing JS project database;</li>
        <li>- through the same database I configured filtering of projects, their display on the main page</li>
      </ul>
      <p className="technology">JS, Svelte</p> */}
      </div>
      <a href="https://yepagency.ru/en" target='_blanc'></a>
    </div>

     

    <div className="project">
     
      <div className="text-wrap">
        <div className="description">
    
          <p>Dodo Pizza’s guides from the creative teams</p>
          <p>PUG, Scss</p>
        </div>
      <h3>Dodo Shift</h3>
 
          
      </div>
        <a href="https://shift.dodobrands.io/en/" target='_blanc'></a>
    </div>


  </div>
  </section>
  
);
