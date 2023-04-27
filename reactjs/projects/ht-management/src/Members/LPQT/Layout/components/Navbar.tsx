import React from 'react';
import { Dropdown, message } from 'antd';
import { UserOutlined, LogoutOutlined, BellOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';



const handleMenuClick: MenuProps['onClick'] = () => {
  message.info('LOGOUTED');
};

const items: MenuProps['items'] = [
  {
    label: 'Log out',
    key: '1',
    icon: <LogoutOutlined />,
    danger: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Navbar: React.FC = () => {

  return (
    <div className='displayFlex'>
      <div className='NavVer'>Version 1.0.0</div>
      <div className='NavMoveRight'>
        <div className='NavIcon'><ExclamationCircleOutlined /></div>
        <div className='NavIcon'><BellOutlined /></div>
        <div className='NavUserName'>
          <Dropdown.Button menu={menuProps} placement='bottomRight' icon={<UserOutlined />}>
            Username
          </Dropdown.Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
