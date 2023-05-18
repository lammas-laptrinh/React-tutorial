import React from 'react';
import { Layout, Col, Row } from 'antd';
import SideBar from "../Service/SideBar"
import HeaderBar from "../Service/HeaderBar"
import ServiceForm from './Service';
const Service: React.FC = () => {
    return (
        <>
            <Layout >
                <Layout >
                    <SideBar />
                    <Layout>
                        <HeaderBar />
                        <Row style={{ background: '#FFFFFF' }}>
                            <Col style={{ marginLeft: '270px' }}>
                                <ServiceForm />
                            </Col>
                        </Row>
                    </Layout>
                </Layout >
            </Layout >
        </>
    );
};

export default Service;
