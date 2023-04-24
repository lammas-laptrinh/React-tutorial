import React, { useState } from 'react';
import './index.css';
import { Layout, theme, Col, Row, Typography } from 'antd';
import SideBar from "./SideBar"
import HeaderBar from "./HeaderBar"
import Standard from "./Standard"
import Double from "./Double"
import King from "./King"
const { Title } = Typography;
const { Sider } = Layout;

const Room: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [isGridView, setIsGridView] = useState(true);
    const [searchValue, setSearchValue] = useState('');
    
    const handleToggleView = () => {
        setIsGridView(!isGridView);
    }

    const handleSearch = (value: string) => {
      setSearchValue(value);
    };
    return (
        <>
            <Layout style={{ width: '100%' }}>
                <Layout>
                    <Sider width={200} style={{ background: colorBgContainer }}>
                        <SideBar />
                    </Sider>
                    <Layout >
                        <HeaderBar />
                        <Row>
                            <Col>
                          
                                <Standard isGridView={isGridView} onToggleView={handleToggleView} searchValue={searchValue} onSearch={handleSearch}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Title>Double</Title>
                                <Double isGridView={isGridView} onToggleView={handleToggleView} searchValue={searchValue} onSearch={handleSearch} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <Title>King</Title>
                                <King isGridView={isGridView} onToggleView={handleToggleView} searchValue={searchValue} onSearch={handleSearch} />
                            </Col>
                        </Row>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default Room;