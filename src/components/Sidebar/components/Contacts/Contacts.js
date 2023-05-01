import './Contacts.scss';
import { IoIosPhonePortrait, IoMdMail } from 'react-icons/io';

function Contacts() {
  const contacts = [
    {
      icon: <IoIosPhonePortrait/>,
      title: '+38 (095) 555-55-55',
      id: 'contact-phone-number'
    },
    {
      icon: <IoMdMail/>,
      title: 'eugenia.ustyk@gmail.com',
      id: 'contact-email'
    }
  ];

  const contactsList = contacts.map(item => {
    return (
      <li className='list__item item' key={item.id}>
        <span className='item__icon'>{item.icon}</span>
        {item.title}
      </li>
    )
  });

  return (
    <div className="contacts">
      <h2 className='contacts__title title'>Contacts</h2>
      <ul className='contacts__list list'>{ contactsList }</ul>
    </div>
  )
}

export default Contacts;