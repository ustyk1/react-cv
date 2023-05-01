import './About.scss'

function About() {
  const title = 'Yevheniia Ustyk';
  const subtitle = 'Junior Front-end Developer';

  return (
    <div className='about'>
      <h3 className='about__subtitle'>{ subtitle }</h3>
      <h1 className='about__title title'>{ title }</h1>
      <p className='about__description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores impedit facere accusamus perferendis officiis culpa eius minima dolor, dignissimos quam nostrum suscipit amet quas!
      </p>
    </div>
  )
}

export default About