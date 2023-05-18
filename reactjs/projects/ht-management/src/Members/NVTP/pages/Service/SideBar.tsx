import { Layout, Menu } from 'antd';
import { PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons';
import './SideBar.css';

const { Sider } = Layout;

const SideBar = () => {
  const menuItems = [
    { key: '1', icon: <PieChartOutlined /> },
    { key: '2', icon: <FileOutlined /> },
    { key: '3', icon: <UserOutlined /> }
  ];

  return (
    <>
      <Sider width="168px" className="sidebar">
        <div className="logo-container">
          <h2 className="logo-text">DTO</h2>
        </div>
        <div className="menu-container">
          <Menu className="menu">
            {menuItems.map(item => (
              <Menu.Item key={item.key}>
                {item.icon}
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
    </>
  );
};

export default SideBar;