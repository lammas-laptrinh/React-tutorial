import {useContext} from 'react';
import UserInformation from './UserInformation';
import { AppContext } from '../Context/AppContext';

export default function Sidebar() {
  const {isOpen,themeStyle}:any = useContext(AppContext)

  if(!isOpen) return null
  

  
  return (
    <div
      className='sidebar'
      style={{
        ...themeStyle,
        padding: 10,
        gridColumn: '1 / 2',
        gridRow: '1 / 3',
      }}
    >
      <h2>Sidebar</h2>
      <UserInformation  />
    </div>
  );
}
