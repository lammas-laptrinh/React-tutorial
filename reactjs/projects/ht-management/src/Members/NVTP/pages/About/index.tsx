import React from 'react';
import { Layout } from 'antd';
import SideBar from "../Layout/SideBar"
import HeaderBar from "../Layout/HeaderBar"
import About from './About';
const Service: React.FC = () => {
    return (
        <>
            <Layout >
                <Layout >
                    <SideBar />
                    <Layout style={{ background: '#FFFFFF' }}>
                        <HeaderBar />
                        <About />
                    </Layout>
                </Layout >
            </Layout >
        </>
    );
};

export default Service;
