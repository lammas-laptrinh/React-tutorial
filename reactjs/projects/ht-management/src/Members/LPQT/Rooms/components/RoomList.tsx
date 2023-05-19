import { Typography } from 'antd';
import { RoomListProps } from '../type';
import renderRoomsAsList from './RenderList';
import renderRoomsAsGrid from './RenderGrid';

const RoomList = ({ rows, searchText, isGridView }: RoomListProps) => {
    const roomTypes = [...new Set(rows.map((room) => room.roomType))];

    const filteredRows = rows.filter(
        (row) => row && row.name && row.name.toLowerCase().includes(searchText!.toLowerCase())
    );

    return (
        <div>
            {roomTypes.map((roomType, index) => {
                const roomsWithType = filteredRows.filter((room) => room.roomType === roomType);
                return (
                    <div className="room-type-wrapper" key={index}>
                        <Typography.Title level={2}>{roomType?.roomTypeName}</Typography.Title>
                        {isGridView ?
                            renderRoomsAsGrid({ rows: roomsWithType })
                            :
                            renderRoomsAsList({ rows: roomsWithType })
                        }
                    </div>
                );
            })}
        </div>
    );
};

export default RoomList;
