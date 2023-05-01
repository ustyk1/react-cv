import './Sidebar.scss';
import Avatar from './components/Avatar/Avatar';
import Contacts from './components/Contacts/Contacts';
import Skills from './components/Skills/Skills';

function Sidebar() {
  return (
    <div className="sidebar">
      <Avatar/>
      <Contacts></Contacts>
      <Skills></Skills>
    </div>  
  )
}

export default Sidebar;