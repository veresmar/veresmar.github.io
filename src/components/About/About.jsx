import './About.css';
// import font from '../../assets/font.png'
// import font2 from '../../assets/font2.png'
import veresPic from '../../assets/veres.jpg';


export const AboutMe = () => (
  <section id="about" className="about">
    {/* <img className="font" src={font} alt="" />
    <img className="font" src={font2} alt="" /> */}
    <img className="veresPic" src={veresPic} alt="" />
    <div className="wrap-about">
      <h1>Hi, I'm Mariia Veres</h1>
      <h2>frontend developer</h2>
     
    </div>
    <div className="wave-up"></div>
  </section>
  
);
