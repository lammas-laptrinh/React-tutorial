import React from 'react';
import { BellOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


const Navbar: React.FC = () => {

  return (
    <div className='displayFlexColor'>
      <div className='NavVer'>Version 1.0.0</div>
      <div className='NavMoveRight'>
        <div className='NavIcon'><ExclamationCircleOutlined /></div>
        <div className='NavIcon'><BellOutlined /></div>
        <div className='NavUserName'>
          Nguyễn Văn B
          <Avatar className="AvatarMain"></Avatar>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

export default Navbar;