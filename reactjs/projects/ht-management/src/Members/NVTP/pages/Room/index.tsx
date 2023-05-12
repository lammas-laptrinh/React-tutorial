import React, { useState } from 'react';
import './index.css';
import { Layout, Col, Row } from 'antd';
import SideBar from "./SideBar"
import HeaderBar from "./HeaderBar"
import FormRoom from "./FormRoom"


const Room: React.FC = () => {
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
            <Layout>
                <Layout>
                    <SideBar />
                    <Layout>
                        <HeaderBar />
                        <Row>
                            <Col>
                                <FormRoom isGridView={isGridView} onToggleView={handleToggleView} searchValue={searchValue} onSearch={handleSearch} />
                            </Col>
                        </Row>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

export default Room;
