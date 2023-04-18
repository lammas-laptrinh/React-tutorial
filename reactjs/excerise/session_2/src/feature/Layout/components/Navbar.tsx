import React, { useState } from 'react';
import { Dropdown, message } from 'antd';
import { UserOutlined, LogoutOutlined, BellOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';


const handleMenuClick: MenuProps['onClick'] = (e) => {
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
    <div style={{ display: 'flex', margin: 16 }}>
      <div style={{ minWidth: '100px' }}>Version 1.0.0</div>
      <div style={{ display: 'flex', marginLeft: 900 }}>
        <div style={{ marginRight: 50 }}><ExclamationCircleOutlined /></div>
        <div style={{ marginRight: 50 }}><BellOutlined /></div>
        <div >
          <Dropdown.Button menu={menuProps} placement='bottomLeft' icon={<UserOutlined />}>
            Username
          </Dropdown.Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
