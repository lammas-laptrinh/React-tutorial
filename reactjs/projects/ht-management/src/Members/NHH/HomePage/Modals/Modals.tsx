import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { BarsOutlined } from '@ant-design/icons';
import "./Modals.css";
const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button style={{background: "#FFF", color: "#000" }} type="primary" onClick={showModal}>
            <BarsOutlined />
            </Button>
            <Modal style={{textAlign: "center" ,margin: 20}} title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ul>
                    <li><a href=""><Link to="/">Home</Link></a></li>
                    <li><a href=""><Link to="/Service">Services</Link> </a></li>
                    <li><a href=""><Link to="/Room">Room</Link></a></li>
                    <li><a href=""> About Us</a></li>
                </ul>
            </Modal>
        </>
    );
};

export default App;