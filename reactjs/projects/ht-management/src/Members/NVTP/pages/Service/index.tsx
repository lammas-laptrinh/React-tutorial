import React from 'react';
import './index.css';
import { Layout, Col, Row } from 'antd';
import SideBar from "./SideBar"
import HeaderBar from "./HeaderBar"
import ServiceForm from './ServiceForm';
const Service: React.FC = () => {
    return (
        <>
            <Layout>
                <Layout>
                    <SideBar />
                    <Layout>
                        <HeaderBar />
                        <Row>
                            <Col style={{ marginLeft: '170px' }}>
                                <ServiceForm />
                            </Col>
                        </Row>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default Service;
