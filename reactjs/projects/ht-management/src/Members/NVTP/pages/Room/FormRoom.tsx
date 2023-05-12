import React, { useState } from 'react';
import { Card, Typography, Row, Col, Space, Modal, Button } from 'antd';
import View from './View';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import SmileIcons from './SmileIcons';
import { rooms } from './common';
const { Title } = Typography;
interface Props {
    isGridView: boolean;
    onToggleView: () => void;
    searchValue: string;
    onSearch: (value: string) => void;
}

const FormRoom: React.FC<Props> = ({ isGridView, onToggleView, searchValue, onSearch }) => {
    const { Meta } = Card;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
    const filteredRooms = rooms.filter((room) =>
        room.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    const type1Rooms = filteredRooms.filter((room) => room.type === 'Standard');
    const type2Rooms = filteredRooms.filter((room) => room.type === 'Double');
    const type3Rooms = filteredRooms.filter((room) => room.type === 'King');
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
        <>

            <span>Rooms</span>
            <SearchInput onSearch={onSearch} />
            <span>Views :</span>
            <View isGridView={isGridView} onToggleView={onToggleView} />
            <Title level={3}>Standard</Title>
            <Row gutter={16}>
                {type1Rooms.map((room, index) => (
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
                                    backgroundColor: "#FC7D72",
                                    borderColor: "#FC7D72",
                                }}>
                                    {room.modal}
                                </Button>
                            ) : null}
                        >
                            <Link to={`/room/${room.id}`}>
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
            <Title level={3}>Double</Title>
            <Row gutter={16}>
                {type2Rooms.map((room, index) => (
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
                                    backgroundColor: "#FC7D72",
                                    borderColor: "#FC7D72",
                                }}>
                                    {room.modal}
                                </Button>
                            ) : null}
                        >
                            <Link to={`/room/${room.id}`}>
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
            <Title level={3}>King</Title>
            <Row gutter={16}>
                {type3Rooms.map((room, index) => (
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
                                    backgroundColor: "#FC7D72",
                                    borderColor: "#FC7D72",
                                }}>
                                    {room.modal}
                                </Button>
                            ) : null}
                        >
                            <Link to={`/room/${room.id}`}>
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
        </>
    );
};

export default FormRoom;