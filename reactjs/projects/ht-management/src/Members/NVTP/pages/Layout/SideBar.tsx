import { Layout, Menu } from 'antd';
import './SideBar.css';
import Sider_1 from '../../Img/sidebar-1.svg'
import Sider_2 from '../../Img/sidebar-2.svg'
import Sider_3 from '../../Img/sidebar-3.svg'
const { Sider } = Layout;

const SideBar = () => {
  const menuItems = [
    { key: '1', image: Sider_1 },
    { key: '2', image: Sider_2 },
    { key: '3', image: Sider_3 }
  ];

  return (
    <>
      <Sider width="168px" className="sidebar">
        <div className="logo-container">
          <h2 className="logo-text">DTD</h2>
        </div>
        <div className="menu-container">
          <Menu className="menu">
            {menuItems.map(item => (
              <Menu.Item key={item.key} className='ant-menu-item'>
                <img src={item.image} alt={`Image ${item.key}`} />
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </Sider>
    </>
  );
};

export default SideBar;