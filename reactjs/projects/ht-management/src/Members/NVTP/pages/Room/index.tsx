import React, { useState } from 'react';
import './index.css';
import { Layout } from 'antd';
import SideBar from "../Room/SideBar"
import HeaderBar from "../Room/HeaderBar"
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
                    <Layout style={{ background: '#FFFFFF' }}>
                        <HeaderBar />
                        <FormRoom isGridView={isGridView} onToggleView={handleToggleView} searchValue={searchValue} onSearch={handleSearch} />
                    </Layout>
                </Layout>
            </Layout >
        </>
    );
};

export default Room;
