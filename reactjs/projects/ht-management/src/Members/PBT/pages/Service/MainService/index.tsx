import React from 'react'
import { Col, MenuProps, Row } from 'antd';
import { Layout } from 'antd';
import Header from '../../DefaultLayout/Header/Header';
import SiderLayout from '../../DefaultLayout/Sider/SiderLayout';
import GetService from '..';
const { Content } = Layout;
import './mainService.css'
import {

    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        icon,
        children,
        label,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem(<PieChartOutlined style={{ fontSize: 20 }} />),
    getItem(<DesktopOutlined style={{ fontSize: 20 }} />),
    getItem(<UserOutlined style={{ fontSize: 20 }} />, [

    ]),
];


function MainService() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row  >
                <SiderLayout name='DTD' item={items} />
            </Row>
            <Layout className="site-layout">
                <Header version='Version 1.0.0' name='Phạm Bá Thái' />
                <Content style={{ margin: '0 16px' }}>
                    <Row className='content-service'>
                        <Col span={22}>
                            <Row  className='warpper-service'>
                                <GetService title='Đặt dịch vụ' />
                            </Row>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainService