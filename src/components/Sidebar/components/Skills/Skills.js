import './Skills.scss';

function Skills() {
  const techSkills = [
    'HTML', 
    'CSS', 
    'TypeScript', 
    'Angular', 
    'RxJs', 
    'Git', 
    'Postman', 
    'Jira'
  ];

  const softSkills = [
    'Scrum', 
    'TeamWork', 
    'Problem Solving', 
    'Adaptibility / Flexibility', 
    'Ability To Learn'
  ];


  const techSkillsList = techSkills.map(techSkill => <li className='list__item'>{techSkill}</li>);
  const softSkillsList = softSkills.map(softSkill => <li className='list__item'>{softSkill}</li>);

  return (
    <div className="skills">
      <h2 className='skills__title title'>Tech Skills</h2>
      <ul className='skills__list list'>{ techSkillsList }</ul>
      <h2 className='skills__title title'>Soft Skills</h2>
      <ul className='skills__list list'>{ softSkillsList }</ul>
    </div>
  )
}

export default Skills;