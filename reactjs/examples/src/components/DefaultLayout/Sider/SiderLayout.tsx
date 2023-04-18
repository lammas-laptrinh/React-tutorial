import React  from 'react';
import { Layout } from "antd";
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd'
import { Menu } from 'antd';;

import './SiderLayout.css'
const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const SiderLayout = (props:{item:any[],name:string}) => {
    return (
        <Sider collapsed={true} theme='light'>
            <div style={{marginTop:40}} className='name-title'>
                <div className='name'>
                <span>{props.name}</span>
                </div>
            </div>
            <Menu style={{marginTop:40}}theme="light" defaultSelectedKeys={['1']} mode="inline" items={props.item} />
        </Sider>
    );
}
export default SiderLayout;


