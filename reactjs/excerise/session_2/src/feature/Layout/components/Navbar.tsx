import React, { useState } from 'react';
import { Menu, Badge, Avatar } from 'antd';
import { BellOutlined, UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: '4rd menu item',
    key: '4',
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};


type MenuItem = { key: string; label: string; icon?: JSX.Element };

const Navbar: React.FC = () => {
  const [notificationCount, setNotificationCount] = useState(0);



  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
      <div>Logo</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Badge count={notificationCount}>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Button
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Badge>
        <Avatar
          style={{ marginLeft: 16 }}
          size={32}
          icon={<UserOutlined />}
          onClick={() => console.log('Avatar clicked')}
        >
          User
        </Avatar>
        <Dropdown menu={menuProps}>
          <Button>
            <Space>
              Button
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
