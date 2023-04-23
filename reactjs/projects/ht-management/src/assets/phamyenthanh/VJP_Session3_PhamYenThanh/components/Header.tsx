import {useContext } from 'react';
import { AppContext } from '../Context/AppContext';


export default function Header() {
  const { userData,isOpen,setIsOpen ,themeStyle,setiday ,iday}:any =useContext(AppContext)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const toggleTheme = () =>{
    setiday(!iday)
  }

  return (
    <div
      className='header'
      style={{
        ...themeStyle,
        display: 'flex',
        justifyContent: 'right',
        padding: '10px',
        gridColumn: isOpen ? '2 / 4' : '1 / 4',
        gridRow: '1 / 2',
      }}
    >
      <div>Hello! {userData.name} </div>
      <p style={{ cursor: 'pointer' , marginLeft: "5px" }} onClick={toggleSidebar}>My profile</p>
      <label className='switch'>
        <input 
          type='checkbox'
          onChange={toggleTheme}
          checked={iday}
        />
          <span className='slider round'></span>
      </label>
    </div>
  );
}
