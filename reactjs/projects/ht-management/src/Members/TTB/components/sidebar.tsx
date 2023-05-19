import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import '../static/index.css'

export default function SideBar(props: { item: any[]; name: string }) {
    return (
        <Sider className="sider" collapsedWidth={168} collapsed theme='light'>
            <div className="parentContainer ">
                <div className="sideLogo" >
                    {props.name}
                </div>
            </div>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="inline"  >
                {props.item.map(item =>
                    <Menu.Item className="menu-item" key={item.key} title={item.label} icon={item.icon}>
                        {item.title}
                    </Menu.Item>
                )}
            </Menu>
        </Sider>
    )
}