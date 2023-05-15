import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../CSS/index.css'
import { MenuItem } from '../../Constant/Global';
import { MenuItemType } from '../../Rooms/type';



const items: MenuItemType[] = MenuItem.map((item) => ({
  key: item.id.toString(),
  label:
    <Link to={item.url}>
      <img src={item.icon} alt="Dashboard" className='SiderItem' />
    </Link>
}));

export default function CustomSider() {
  return (
    <Layout className='SiderLayout'>
      <div className='SiderTittle'>DTD</div>
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} className='SiderMenu' />
    </Layout>
  );
};
