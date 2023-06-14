import { Typography } from 'antd';
import { RoomListProps } from '../type';
import renderRoomsAsList from './RenderList';
import renderRoomsAsGrid from './RenderGrid';

const RoomList = ({ rows, searchText, isGridView, rowUser }: RoomListProps) => {
    if (!rows) {
        return <div>Loading...</div>; // add a loading state or error message
    }
    const filteredRows = rows?.rooms?.filter((row: any) => {
        if (searchText) {
            return row.name && row.name.toLowerCase().includes(searchText.toLowerCase());
        } else {
            return row
        }
    });
    return (
        <div className='RoomListContain'>
            {rows?.roomTypes?.map((roomTypeName: any, index: any) => {
                const roomsWithType = filteredRows.filter((row: any) => row.roomTypeId === roomTypeName.id);
                return (
                    <div className="room-type-wrapper" key={index}>
                        <Typography.Title level={2}>{roomTypeName.name}</Typography.Title>
                        {isGridView ? renderRoomsAsGrid({ rows: roomsWithType, rowUser }) : renderRoomsAsList({ rows: roomsWithType, rowUser })}
                    </div>
                );
            })}
        </div>
    );
};

export default RoomList;

