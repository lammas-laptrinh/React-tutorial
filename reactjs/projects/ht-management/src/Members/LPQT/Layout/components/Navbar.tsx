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
    <div style={{ display: 'flex' }}>
      <div style={{ minWidth: '100px', marginTop: 16, marginLeft: 16 }}>Version 1.0.0</div>
      <div style={{ display: 'flex', marginLeft: 1100, }}>
        <div style={{ marginRight: 50, marginTop: 16 }}><ExclamationCircleOutlined /></div>
        <div style={{ marginRight: 50, marginTop: 16 }}><BellOutlined /></div>
        <div style={{ marginBottom: 90, marginTop: 8}}>
          <Dropdown.Button menu={menuProps} placement='bottomRight' icon={<UserOutlined />}>
            Username
          </Dropdown.Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
