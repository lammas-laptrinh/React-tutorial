import { Button, Space } from 'antd';
import { Rooms } from '../types';
import { useNavigate } from 'react-router-dom';
import '../static/index.css'
import { useState } from 'react';

function Room(props: { roomName: string, date: any, room: Rooms }) {
    const navigate = useNavigate();
    const handleClick = (room: any) => {
        navigate(`${room.id}`);
    };
    const [expand, setExpand] = useState<boolean>(false);
    function handleMouseOver() {
        setExpand(true)
    }
    function handleMouseLeave() {
        setExpand(false)
    }
    return (
        <a onClick={() => handleClick(props.room)}>
            <Space className='roomCard'>
                {props.room.serviceCount > 0 &&
                    <Button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} danger className='service-tip'>{expand === false ? props.room.serviceCount : props.room.service?.map((item) => {
                        return <div key={item}>{item}</div>
                    })}</Button>
                }
                <Space>{props.roomName}</Space>
                <Space>
                    {[...Array(props.room.bedAmount)].map((_, i) => (
                        <Space key={i} className='bed'> </Space>
                    ))}
                </Space>
                <Space className='date'>{props.date}</Space>

            </Space>
        </a>
    );
}

export default Room;