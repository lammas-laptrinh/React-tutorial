import React from 'react';
import { Card, Row, Col, Space, Tooltip, Button } from 'antd';
import View from './View';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import SmileIcons from './SmileIcons';
import { rooms } from './common';
import './FormRoom.css'
interface Props {
    isGridView: boolean;
    onToggleView: () => void;
    searchValue: string;
    onSearch: (value: string) => void;
}

const FormRoom: React.FC<Props> = ({ isGridView, onToggleView, searchValue, onSearch }) => {
    const { Meta } = Card;
    const filteredRooms = rooms.filter((room) =>
        room.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    const type1Rooms = filteredRooms.filter((room) => room.type === 'Standard');
    const type2Rooms = filteredRooms.filter((room) => room.type === 'Double');
    const type3Rooms = filteredRooms.filter((room) => room.type === 'King');
    return (
        <>
            <div className='form-room'>
                <Row>
                    <Col span={12} style={{ display: 'flex', alignItems: 'center' }}><h1 className='room-name'>Rooms</h1>
                        <SearchInput onSearch={onSearch} /></Col>
                    <Col span={12} style={{ textAlign: 'end', marginTop: 40 }}>
                        <span className='view'>Views :</span> <View isGridView={isGridView} onToggleView={onToggleView} /></Col>
                </Row>
                <p className='title'>Standard</p>
                <Row gutter={32} >
                    {type1Rooms.map((room) => (
                        <Col span={isGridView ? 4 : 23} key={room.title} className='room-list'>
                            <Card
                                title={room.title}
                                extra={room.modal ? (
                                    <Tooltip color='#FC7D72'
                                        title={
                                            <>
                                                {room.modalContent?.map((item, idx) => (
                                                    <p key={idx}>{item}</p>
                                                ))}
                                            </>
                                        }
                                    >
                                        <Button type="link" className="btn">
                                            {room.modal}
                                        </Button>
                                    </Tooltip>
                                ) : null}
                                className='card'
                            >
                                <Link to={`/room/${room.id}`}>
                                    <SmileIcons />
                                </Link>
                                <Meta
                                    title={
                                        <Space>
                                            <p className='time'>{room.time}</p>
                                        </Space>
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row >
                <p className='title'>Double</p>
                <Row gutter={32}>
                    {type2Rooms.map((room) => (
                        <Col span={isGridView ? 4 : 23} key={room.title} className='room-list'>
                            <Card
                                title={room.title}
                                extra={room.modal ? (
                                    <Tooltip color='#FC7D72'
                                        title={
                                            <>
                                                {room.modalContent?.map((item, idx) => (
                                                    <p key={idx}>{item}</p>
                                                ))}
                                            </>
                                        }
                                    >
                                        <Button type="link" className="btn">
                                            {room.modal}
                                        </Button>
                                    </Tooltip>
                                ) : null}
                                className='card'
                            >
                                <Link to={`/room/${room.id}`}>
                                    <SmileIcons />
                                </Link>
                                <Meta
                                    title={
                                        <Space>
                                            <p className='time'>{room.time}</p>
                                        </Space>
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
                <p className='title'>King</p>
                <Row gutter={32}>
                    {type3Rooms.map((room) => (
                        <Col span={isGridView ? 4 : 23} key={room.title} className='room-list'>
                            <Card
                                title={room.title}
                                extra={room.modal ? (
                                    <Tooltip color='#FC7D72'
                                        title={
                                            <>
                                                {room.modalContent?.map((item, idx) => (
                                                    <p key={idx} className='tooltip'>{item}</p>
                                                ))}
                                            </>
                                        }
                                    >
                                        <Button type="link" className="btn">
                                            {room.modal}
                                        </Button>
                                    </Tooltip>
                                ) : null}
                                className='card'
                            >
                                <Link to={`/room/${room.id}`}>
                                    <SmileIcons />
                                </Link>
                                <Meta
                                    title={
                                        <Space>
                                            <p className='time'>{room.time}</p>
                                        </Space>
                                    }
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div >
        </>
    );
};

export default FormRoom;