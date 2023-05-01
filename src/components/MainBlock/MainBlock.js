import './MainBlock.scss'
import WorkExperience from './components/WorkExperience/WorkExperience'
import Projects from './components/Projects/Projects'
import About from './components/About/About'
import Education from './components/Education/Education'


function MainBlock() {
  return (
    <div className="main-block">
      <About/>
      <Projects/>
      <WorkExperience/>
      <Education/>
    </div>
  )
}

export default MainBlock