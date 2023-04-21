import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

export default function SideBar(props: { item: any[]; name: string }) {
    return (
        <Sider collapsed={true} theme='light'>
            <div style={{ height: 36, margin: 12, background: 'rgba(255, 255, 255, 0.2)', fontSize: '20px', color: '#eb7d34', fontWeight: 'bold', border: 'solid', borderRadius: '10px' }} >
                {props.name}
            </div>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={props.item} />
        </Sider>
    )
}