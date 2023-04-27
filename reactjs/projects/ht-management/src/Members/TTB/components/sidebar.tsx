import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import '../static/index.css'

export default function SideBar(props: { item: any[]; name: string }) {
    return (
        <Sider collapsedWidth={120} collapsed theme='light'>
            <div className="sideLogo" >
                {props.name}
            </div>
            <Menu expandIcon  theme="light" defaultSelectedKeys={['1']} mode="inline" items={props.item} />
        </Sider>
    )
}