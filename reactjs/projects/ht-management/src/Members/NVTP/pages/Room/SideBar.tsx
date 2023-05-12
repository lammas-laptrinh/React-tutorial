import { Layout, Menu, Typography } from 'antd';
import { PieChartOutlined, FileOutlined, UserOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Sider } = Layout;

const SideBar = () => {
    const menuItems = [
        { key: '1', icon: <PieChartOutlined /> },
        { key: '2', icon: <FileOutlined /> },
        { key: '3', icon: <UserOutlined /> }
    ];
    return (
        <Sider style={{ background: '#FFFFFF' }}>
            <Title style={{ color: '#F1AC4D', textAlign: 'center' }}>
                DTO
            </Title>
            <Menu theme="light">
                {menuItems.map(item => (
                    <Menu.Item key={item.key} icon={item.icon} style={{ marginLeft: '60px', background: 'none' }}>
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    );
};

export default SideBar;
