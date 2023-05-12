import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';
import { BellOutlined, InfoCircleOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const HeaderBar = () => {
    const renderIcons = () => {
        const icons = [BellOutlined, InfoCircleOutlined, UserOutlined];

        return icons.map((Icon, index) => {
            if (index === 2) {
                return (
                    <React.Fragment key={index}>
                        <span>Nguyễn Văn B</span>
                        <Icon style={{ fontSize: '20px', marginRight: '10px' }} />
                    </React.Fragment>
                );
            } else {
                return (
                    <Icon key={index} style={{ fontSize: '20px', marginRight: '10px' }} />
                );
            }
        });
    };

    return (
        <Header style={{ background: '#FFFFFF' }}>
            <Row justify="space-between">
                <Col>
                    <Title level={4}>Version 1.0.0</Title>
                </Col>
                <Col>
                    <Space>{renderIcons()}</Space>
                </Col>
            </Row>
        </Header>
    );
};

export default HeaderBar;
