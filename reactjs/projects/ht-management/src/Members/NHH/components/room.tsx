import { Button, Space, Tooltip } from 'antd';
import { Rooms } from '../types';
import { useNavigate } from 'react-router-dom';
import '../static/index.scss'

function Room(props: { roomName: string, date: any, room: Rooms }) {
    const navigate = useNavigate();
    const handleClick = (room: any) => {
        navigate(`${room.id}`);
    };
    return (
        <a onClick={() => handleClick(props.room)}>
            <Space className='roomCard'>
                {props.room.serviceCount > 0 &&
                    <Tooltip placement="rightTop" title={props.room.service?.map((item) => {
                        return <div key={item}>{item}</div>;
                    })}>
                        <Button danger type='primary' className='service'>{props.room.serviceCount}</Button>
                    </Tooltip>
                }
                <Space>{props.roomName}</Space>
                <Space>
                    {[...Array(props.room.bedAmount)].map((_, i) => (
                        <Space key={i} className='bed'> </Space>
                    ))}
                </Space>
                <Space>{props.date}</Space>

            </Space>
        </a>
    );
}

export default Room;