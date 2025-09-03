import './About.css';
// import font from '../../assets/font.png'
// import font2 from '../../assets/font2.png'
import veresPic from '../../assets/veres.jpg';


export const AboutMe = () => (
  <section id="about" className="about-section">
    
    <div className="about-text">
    {/* <p>Hello! I’m a developer with 3 years of experience working in a <a href="https://intuition.team/about" target='_blanc'>design bureau</a>,  side by side with designers, developers, and project managers. I&nbsp;was responsible for the front-end - from clean, semantic layout to building interactive features with JavaScript and ensuring a smooth user experience.</p>
    <p>It’s important to me to create interfaces that not only look good but are also well-structured, accessible, and easy to maintain. I collaborate closely with the team to spot and address potential issues early, ensuring the interface aligns with the product vision.</p>
    <p>Now, I’m ready to take on more complex projects and keep growing as a&nbsp;developer — contributing to products that are built with intention and&nbsp;attention to detail.</p>
    <br/> */}
    <p>Hello! I am a developer with 3 years of experience working in a <a href="https://intuition.team/about" target='_blanc'>design bureau</a> team.<br/> 
    It is important for me to create interfaces that not&nbsp;only look good, but are also accessible, well-structured and&nbsp;easy to maintain. 
    </p>
    
    <p>Based in Amsterdam, NL.</p>
    
    </div>
    <div className="about-img">
       {/* <img src={veresPic} alt="Maria Veres" /> */}
  
    </div>
   
  </section>
  
);
