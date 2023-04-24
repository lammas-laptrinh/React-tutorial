import React, { useState } from 'react';
import { Card, Typography, Row, Col, Space, Modal, Button } from 'antd';
import { Link } from 'react-router-dom';
import SmileIcons from './SmileIcons';
const { Title } = Typography;

type Room = {
    id: number;
    title: string;
    time: string;
    modal: string;
    modalContent?: string[];
    details: string;
}
interface Props {
    isGridView: boolean;
    onToggleView: () => void;
    searchValue: string;
    onSearch: (value: string) => void;
}
export const rooms: Room[] = [
    { id: 1, title: 'Room 1', time: '9:00 AM', modal: '3', modalContent: ['Ống nước hỏng', 'Lấy thêm đồ ăn', 'Không bật được đèn nhà tắm'], details: 'This is more detailed information about Room 1.' },
    { id: 2, title: 'Room 2', time: '9:00 AM', modal: "", modalContent: [], details: 'This is more detailed information about Room 2.' },
    { id: 3, title: 'Room 3', time: '9:00 AM', modal: "1", modalContent: ['Ống nước hỏng'], details: 'This is more detailed information about Room 3.' },
    { id: 4, title: 'Room 4', time: '9:00 AM', modal: "", modalContent: [], details: 'This is more detailed information about Room 4.' },
    { id: 5, title: 'Room 5', time: '9:00 AM', modal: "", modalContent: [], details: 'This is more detailed information about Room 5.' },
];
const Double: React.FC<Props> = ({ isGridView, searchValue }) => {
    const { Meta } = Card;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
    


    const filteredRooms = rooms.filter((room) =>
        room.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    const showModal = (index: number) => {
        setIsModalOpen(true);
        setCurrentRoomIndex(index);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
            <Row gutter={16}>
                {filteredRooms.map((room, index) => (
                    <Col span={isGridView ? 12 : 4.5} key={room.title}>
                        <Card style={{ zIndex: "1" }}
                            title={room.title}
                            extra={room.modal ? (
                                <Button type="primary" onClick={() => showModal(index)} style={{
                                    position: "absolute",
                                    right: "-15px",
                                    top: "5px",
                                    zIndex: "1",
                                    width: "10px",
                                    height: "25px",
                                    textAlign: "center",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}>
                                    {room.modal}
                                </Button>
                            ) : null}
                        >
                            <Link to={`/rooms/${room.id}`}>
                                <SmileIcons />
                                </Link>
                            <Meta
                                title={
                                    <Space>
                                        <Title level={5}>{room.time}</Title>
                                    </Space>
                                }
                            />
                        </Card>
                        <Modal
                            visible={isModalOpen && currentRoomIndex === index}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            mask={false}
                            style={{ width: 300, height: 200 }}
                        >
                            {rooms[currentRoomIndex].modalContent?.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                        </Modal>
                    </Col>
                ))}
            </Row>
    );
};

export default Double;