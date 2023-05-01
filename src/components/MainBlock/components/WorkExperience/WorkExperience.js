import './WorkExperience.scss';

function WorkExperience() {
  const title = 'Work Experience';

  return (
    <div className='work-experience'>
      <h3 className='work-experience__title  title'>{ title }</h3>
      <ul className='work-experience__list list'>
        <li className='list__item item'>
          <p className='item__description'>Junior Front-end Developer (Angular)</p>
          <p className='item__period'>From 06.2023 to 01.2024</p>
          <div className='item__tasks tasks'>
            <p className='tasks__title'>Tasks:</p>
            <ul className='tasks__list list'>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum sit.</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default WorkExperience;