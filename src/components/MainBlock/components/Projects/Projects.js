import './Projects.scss';
import { IoIosLink } from "react-icons/io";


function Projects() {
  const title = 'Projects';

  const projectLinks = [
    'https://ustyk1.github.io/TimeWeb',
    'https://ustyk1.github.io/registration-login-form/',
    'https://ustyk1.github.io/forecast-weather/',
    'https://ustyk1.github.io/Dream-Tour-prod/'
  ];

  const projectLinksList = projectLinks.map(link => {
    return (
      <li className='list__item item'>
        <span className='item__icon'><IoIosLink/></span>
        <a className='item__link' target="_blank" rel="noreferrer" href={link}>{link}</a>
      </li>
    )
  });

  return (
    <div className='projects'>
      <h3 className='projects__title title'>{ title }</h3>
      <ul className='projects__list list'>{ projectLinksList }</ul>
    </div>
  )
}

export default Projects;