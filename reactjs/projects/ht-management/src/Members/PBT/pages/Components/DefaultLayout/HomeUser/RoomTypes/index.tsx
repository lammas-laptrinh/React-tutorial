
import { Space, Row } from 'antd';
import './roomtype.css';
import { RoomType } from '../type';

function RoomTypes(props: { roomList: RoomType[] }) {
  return (
    <Row className='room-base'>
      {props.roomList.map((room,index) => (
        <Space className='room-wrapper' key={index}>
          <img className='room-image' src={room.roomImage} alt={room.roomName} />
          <div className='room-decsription'>
            <span className='span-description'>{room.roomName}</span>
            <p>{room.roomDescription}</p>
          </div>
        </Space>
      ))}
    </Row>
  );
}

export default RoomTypes;
