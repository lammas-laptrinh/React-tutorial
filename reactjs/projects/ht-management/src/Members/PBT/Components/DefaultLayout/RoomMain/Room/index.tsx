import { Button, Space, Tooltip } from 'antd';
import { RoomMain } from './type';
import './Room.css'
function Room(props: { roomName: string, people:any,date: any, endDate: any, room: RoomMain }) {

    return (
        <Space>
            <Space className='wrapper-sv' >
                {props.room.countRequest > 0 &&
                    <Tooltip  color='#FC7D72' placement="rightBottom" title={props.room.request.map((item) => {
                        return <div>{item}</div>;
                    })}>
                        <Button  className='request-button' type='primary'>{props.room.countRequest}</Button>
                    </Tooltip>
                }
                <Space className='title-room'>{props.roomName}</Space>
                <Space>
                    {Array.from({ length: props.people }).map((_, i) => (
                        <Space className='user-avatar' key={i} > </Space>
                    ))}
                </Space>
                <Space className='date-wrapper'>{props.date}-{props.endDate}</Space>

            </Space>
        </Space>
    );
}

export default Room;