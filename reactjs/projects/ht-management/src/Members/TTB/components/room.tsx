import { Button, Space, Tooltip } from 'antd';
import { Rooms } from '../types';
import { useNavigate } from 'react-router-dom';

function Room(props: { roomName: string, date: any, room: Rooms }) {
    const navigate = useNavigate();
    const handleClick = (room: any) => {
        navigate(`${room.id}`);
    };
    return (
        <a onClick={() => handleClick(props.room)} style={{ textDecoration: 'none', color: 'black' }}>
            <Space style={{ border: '1px solid grey', borderRadius: 12, margin: '20px', minWidth: 200, minHeight: 150, flexDirection: 'column', padding: 10, position: 'relative' }}>
                {props.room.serviceCount > 0 &&
                    <Tooltip placement="rightTop" title={props.room.service?.map((item) => {
                        return <div>{item}</div>;
                    })}>
                        <Button danger type='primary' style={{ position: 'absolute', marginLeft: '40%' }}>{props.room.serviceCount}</Button>
                    </Tooltip>
                }
                <Space>{props.roomName}</Space>
                <Space>
                    {[...Array(3)].map((_, i) => (
                        <Space key={i} style={{ borderRadius: '50%', backgroundColor: 'gray', minWidth: 25, minHeight: 25 }}> </Space>
                    ))}
                </Space>
                <Space>{props.date}</Space>

            </Space>
        </a>
    );
}

export default Room;