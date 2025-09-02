import './About.css';
// import font from '../../assets/font.png'
// import font2 from '../../assets/font2.png'
import veresPic from '../../assets/veres.jpg';


export const AboutMe = () => (
  <section id="about" className="about-section">
    
    <div className="about-text">

    

    <p>Hello! I’m a developer with 3 years of experience working in a <a href="https://intuition.team/about" target='_blanc'>design bureau</a>,  side by side with designers, developers, and project managers. I was responsible for the front-end - from clean, semantic layout to building interactive features with JavaScript and ensuring a smooth user experience.</p><br/>

    <p>It’s important to me to create interfaces that not only look good but are also well-structured, accessible, and easy to maintain. I collaborate closely with the team to spot and address potential issues early, ensuring the interface aligns with the product vision.</p><br/>

    <p>Now, I’m ready to take on more complex projects and keep growing as a developer — contributing to products that are built with intention and attention to detail.</p>
    <br/>
    
    </div>
    <div className="about-img">
       <img src={veresPic} alt="Maria Veres" />
  
    </div>
   
  </section>
  
);
