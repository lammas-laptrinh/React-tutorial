import React, { useState } from 'react'
import { Col, MenuProps, Row } from 'antd';
import { Layout } from 'antd';
import Header from '../DefaultLayout/Header/Header';
import Search from '../DefaultLayout/Search/Search';
import SiderLayout from '../DefaultLayout/Sider/SiderLayout';
import Grid from '../DefaultLayout/Grid/Grid';
import List from '../DefaultLayout/List/list';
import { UnorderedListOutlined, InsertRowBelowOutlined } from '@ant-design/icons';
import './RoomMain.css'
const { Content } = Layout;
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
function RoomMain() {
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [searchValue, setSearchValue] = useState('');

    const handleSearchValueChange = (value: string) => {
        setSearchValue(value);
      };
    const handleViewChange = (newView: 'grid' | 'list') => {
        setView(newView);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row  >
                <SiderLayout name='DTD' item={items} />
            </Row>
            <Layout className="site-layout">
                <Header version='Version 1.0.0' name='Phạm Bá Thái' />
                <Content style={{ margin: '0 16px' }}>
                    <Row style={{ marginLeft: 20, marginBottom: 20 }}>
                        <Col span={22} style={{ justifyContent: 'space-between', textAlign: 'left', alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
                            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Row>
                                    <h2>Rooms</h2>
                                </Row>
                                <Row style={{ width: 200, height: 40, borderRadius: 100, marginLeft: 20 }}><Search onSearch={handleSearchValueChange}  title='Tìm kiếm ....' /></Row>
                            </Row>
                            <Row style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '20px' }}>View:</span>
                                <div className='gird-view' onClick={() => handleViewChange('grid')} >
                                    <InsertRowBelowOutlined style={{ fontSize: '20px', alignItems: 'center' }} /> <span style={{ fontSize: '20px' }}> Grid</span>
                                </div>
                                <Row className='list-view' onClick={() => handleViewChange('list')}>
                                    <UnorderedListOutlined style={{ fontSize: '20px', alignItems: 'center' }} /> <span style={{ fontSize: '20px' }}> Line</span>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', flexDirection: 'column' }}>
                        {view === 'grid' ? (
                            <Grid searchValue={searchValue}/>
                        ) : (
                            <List searchValue={searchValue}/>
                        )
                        }
                    </Row>
                </Content>
            </Layout>
        </Layout>
    )
}

export default RoomMain