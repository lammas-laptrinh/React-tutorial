import React, { useState } from 'react';
import { Card, Typography, Row, Col, Space, Modal, Button} from 'antd';
import View from './View';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import SmileIcons from './SmileIcons';
const { Title } = Typography;

export type Room = {
    id: number;
    title: string;
    time: string;
    modal: string;
    modalContent?: string[];
    details: string;
    type: string;
}
interface Props {
    isGridView: boolean;
    onToggleView: () => void;
    searchValue: string;
    onSearch: (value: string) => void;
}
export const rooms: Room[] = [
    {
        id: 1,
        title: 'Room 1',
        time: '12/06- 18/06',
        modal: '3',
        modalContent: ['Ống nước hỏng', 'Lấy thêm đồ ăn', 'Không bật được đèn nhà tắm'],
        details: 'This is more detailed information about Room 1.',
        type: 'Type 1', 
    },
    {
        id: 2,
        title: 'Room 2',
        time: '12/06- 18/06',
        modal: '',
        modalContent: [],
        details: 'This is more detailed information about Room 2.',
        type: 'Type 2', 
    },
    {
        id: 3,
        title: 'Room 3',
        time: '12/06- 18/06',
        modal: '1',
        modalContent: ['Ống nước hỏng'],
        details: 'This is more detailed information about Room 3.',
        type: 'Type 3', 
    },
    
    {
        id: 4,
        title: 'Room 2',
        time: '12/06- 18/06',
        modal: '',
        modalContent: [],
        details: 'This is more detailed information about Room 2.',
        type: 'Type 2',
    },
    
    {
        id: 5,
        title: 'Room 2',
        time: '12/06- 18/06',
        modal: '',
        modalContent: [],
        details: 'This is more detailed information about Room 2.',
        type: 'Type 2', 
    },
];
const Standard: React.FC<Props> = ({ isGridView, onToggleView, searchValue, onSearch }) => {
    const { Meta } = Card;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
    const filteredRooms = rooms.filter((room) =>
    room.title.toLowerCase().includes(searchValue.toLowerCase())
);
const type1Rooms = filteredRooms.filter((room) => room.type === 'Type 1');
const type2Rooms = filteredRooms.filter((room) => room.type === 'Type 2');
const type3Rooms = filteredRooms.filter((room) => room.type === 'Type 3');
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
        </>
    );
};

export default Standard;