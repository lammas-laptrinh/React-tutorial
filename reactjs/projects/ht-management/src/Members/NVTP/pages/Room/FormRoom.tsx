import React from 'react';
import { Row, Col } from 'antd';
import View from './View';
import SearchInput from './SearchInput';
import { rooms } from './common';
import './FormRoom.css'
import ListRooms from './ListRooms';
interface Props {
    isGridView: boolean;
    onToggleView: () => void;
    searchValue: string;
    onSearch: (value: string) => void;
}

const FormRoom: React.FC<Props> = ({ isGridView, onToggleView, searchValue, onSearch }) => {
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
                        <SearchInput onSearch={onSearch} />
                    </Col>
                    <Col span={12} style={{ textAlign: 'end', marginTop: 40 }}>
                        <span className='view-room'>View :</span>
                        <View isGridView={isGridView} onToggleView={onToggleView} />
                    </Col>
                </Row>
                <p className='title'>Standard</p>
                <ListRooms isGridView={isGridView} rooms={type1Rooms} />
                <p className='title'>Double</p>
                <ListRooms isGridView={isGridView} rooms={type2Rooms} />
                <p className='title'>King</p>
                <ListRooms isGridView={isGridView} rooms={type3Rooms} />
            </div>
        </>
    );
};

export default FormRoom;