import { Typography, List, Card } from 'antd';
import { RoomListProps, Room } from '../type';
import { Link } from 'react-router-dom';
import ServiceBox from './ServiceBox';

const RoomList = ({ rows, searchText, isGridView }: RoomListProps) => {
    // create an array of unique room types
    const roomTypes = [...new Set(rows.map((room) => room.roomType))];
    // a list that contain all room with the search text included
    const filteredRows = rows.filter(
        (row) => row && row.name && row.name.toLowerCase().includes(searchText?.toLowerCase())
    );

    //Grid View for UI
    const renderRoomsAsGrid = (rooms: Room[]) => {
        return (
            <List
                className="room-list"
                grid={{ column: 6, gutter: 8 }}
                dataSource={rooms}
                renderItem={(room: Room, index: number) => (
                    <List.Item key={index}>
                        <Link to={`${window.location.pathname}/${room.id}`}>
                            <Card className="card" hoverable>
                                {/* the room name. This value is also use for the search bar */}
                                <Typography.Text style={{ fontWeight: 'bold' }} className="room">
                                    {room.name}
                                </Typography.Text>
                                <br />
                                {/* checkIn and checkOut values.. yeah nothing Special */}
                                <Typography.Text className="checkInOut">
                                    {room.checkIn?.toLocaleDateString()} - {room.checkOut?.toLocaleDateString()}
                                </Typography.Text>
                            </Card>
                        </Link>
                        {room?.serviceCount! > 0 &&
                            <ServiceBox row={room} />
                        }
                    </List.Item>
                )}
            />
        );
    };

    //List View for UI
    const renderRoomsAsList = (rooms: Room[]) => {
        return rooms.map((room: Room, index: number) => (
            <div style={{ position: 'relative' }}>
                <Link style={{ textDecoration: 'none' }} key={index} to={`${window.location.pathname}/${room.id}`}>
                    <Card className="card" hoverable>
                        <div style={{ fontWeight: 'bold' }}>{room.name}</div>
                        <div>
                            {room.checkIn?.toLocaleDateString()} - {room.checkOut?.toLocaleDateString()}
                        </div>
                    </Card>
                </Link>
                {/*  Service notify only appear only if serviceCount > 0 */}
                {room?.serviceCount! > 0 &&
                    <ServiceBox row={room} />
                }

            </div>


        ));
    };



    return (
        <>
            {roomTypes.map((roomType, index) => {
                // create an array of rooms with the current room type. And also show up the room with matched searchText value
                const roomsWithType = filteredRows.filter((room) => room.roomType === roomType);

                // choose the rendering style based on isGridView
                const viewStyle = isGridView ? renderRoomsAsGrid(roomsWithType) : renderRoomsAsList(roomsWithType);

                return (
                    <div className="room-type-wrapper" key={index}>
                        <Typography.Title level={2}>{roomType}</Typography.Title>
                        {viewStyle}
                    </div>
                );
            })}
        </>
    );
};

export default RoomList;
