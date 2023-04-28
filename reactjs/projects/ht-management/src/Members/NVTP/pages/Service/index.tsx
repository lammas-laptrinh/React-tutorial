import React from 'react';
import './index.css';
import { Layout, Col, Row} from 'antd';
import SideBar from "./SideBar"
import HeaderBar from "./HeaderBar"
import ServiceForm from './ServiceForm';
const { Sider } = Layout;

const Service: React.FC = () => {
    return (
        <>
            <Layout style={{ width: '100%' }}>
                <Layout>
                    <Sider width={200} >
                        <SideBar />
                    </Sider>
                    <Layout>
                        <HeaderBar />
                        <Row>  
                            <Col style={{marginLeft:'270px'}}>
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
