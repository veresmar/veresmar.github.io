import './Contacts.css';
import Mail from './img/mail.png'
import GitHub from './img/github.png'
import Tg from './img/tg.png'

export const Contacts = () => {
  return (
    <section id="contacts" className="contacts">
      <ul>
        <li>
          <a href="mailto:veres.maria.dev@gmail.com" target='_blanc'>
          <img src={Mail} alt="google mail icon" />
          </a>
        </li>
        
        <li>
          <a href="https://github.com/veresmar" target='_blanc'>
        <img src={GitHub} alt="GitHub icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mariia-veres-824507229/" target='_blanc'>
        <img src={Tg} alt="linkedin icon" />
          </a>
        </li>
      </ul>
    </section>
  );
};
