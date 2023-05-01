import './Education.scss';

function Education() {
  const title = 'Education';

  const education = [
    {
      profile: 'Front-end Developer',
      university: 'IT Step Computer Academy',
      period: '10.2022 - 08.2023'
    },
    {
      profile: 'Accounting and Taxation',
      university: 'Sumy State Univercity',
      period: '09.2016 - 12.2021'
    }
  ];

  const educationList = education.map(item => {
    return (
      <li className='list__item item'>
        <p className='item__profile'>{item.profile}</p>
        <p className='item__university'>{item.university}</p>
        <p className='item__period'>{item.period}</p>
      </li>
    )
  });

  return (
    <div className='education'>
      <h3 className='education__title title'>{ title }</h3>
      <ul className='education__list list'>{ educationList }</ul>
    </div>
  )
}

export default Education;