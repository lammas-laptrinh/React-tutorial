import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import '../../CSS/index.css'
import { MenuItem } from '../../Constant/Global';
import { MenuItemType } from '../../Room/type';


const items: MenuItemType[] = MenuItem.map((item) => ({
  key: item.id.toString(),
  icon: <item.icon />, // Render the icon component as JSX
  label: (
    <Link to={item.url}>
      {item.name}
    </Link>
  ),
}));

export default function CustomSider() {

    return (
        <Layout className='SiderLayout'>
            <div className='SiderTittle'>Taiki</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} className='SiderMenu' />
        </Layout>
    );
};
