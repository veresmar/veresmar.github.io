import './About.css';
// import font from '../../assets/font.png'
// import font2 from '../../assets/font2.png'
import veresPic from '../../assets/veres.jpg';


export const AboutMe = () => (
  <section id="about" className="about-section">
    
    <div className="about-text">

    <h2>About</h2>
    <p>I spent three years at <a href="https://intuition.team/about" target='_blanc'>Intuition Design Bureau</a>, where I worked side by side with designers, developers, and project managers. That time taught me how much I value being part of a team that not only builds things together, but also shares the reasoning behind every decision — always keeping the user and the client in mind.</p><br/>
    <p>My background is rooted in semantic layout and styling (HTML, Pug, CSS/SCSS), but I’ve steadily taken on more responsibility in the front-end layer — working with JavaScript, building interactive components, and expanding my focus to include not only layout and design, but also structure, interaction, and front-end logic.</p><br/>
    <p>Now, I’m ready to go further: to deepen my skills in modern frameworks, accessibility, and best practices — and to continue evolving as a developer by learning from skilled teammates and contributing to thoughtful, user-centered products.</p>
    <br/>
    
    </div>
    <div className="about-img">
       <img src={veresPic} alt="Maria Veres" />
  
    </div>
   
  </section>
  
);
