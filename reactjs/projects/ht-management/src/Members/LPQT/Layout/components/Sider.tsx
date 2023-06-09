import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../CSS/index.css'
import { MenuItem } from '../../Constant/Global';
import { MenuItemType } from '../../Rooms/type';

const items: MenuItemType[] = MenuItem.map((item) => ({
  key: item.id.toString(),
  label:
    <Link to={item.url}>
      <item.icon style={{ fontSize: 30 }} />
    </Link>
}));

export default function CustomSider() {
  return (
    <Layout className='SiderLayout'>
      <Link to={'/'}>
        <div className='SiderTittle'>DTD</div>
      </Link>
      <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} className='SiderMenu' />
    </Layout>
  );
};