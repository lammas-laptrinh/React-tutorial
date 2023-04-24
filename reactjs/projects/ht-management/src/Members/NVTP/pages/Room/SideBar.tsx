import React from 'react';
import './index.css';
import {PieChartOutlined, LaptopOutlined, UserOutlined,  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu} from 'antd';

const items2: MenuProps['items'] = [PieChartOutlined,LaptopOutlined,UserOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        return {
            key: `sub${key}`,
            icon: React.createElement(icon),

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);
const SideBar: React.FC = () => {

    return (
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                
    );
};

export default SideBar;