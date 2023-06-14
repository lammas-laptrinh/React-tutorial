
import { Space, Row } from 'antd';
import './roomtype.css';
import { RoomType } from '../type';

function RoomTypes(props: { roomList: RoomType[] }) {
  return (
    <Row className='room-base'>
      {props.roomList.map((room,index) => (
        <Space className='room-wrapper' key={index}>
          <img className='room-image' src="https://res.cloudinary.com/dpdzbuiml/image/upload/v1684740406/banner_pv4bij.jpg"  />
          <div className='room-decsription'>
            <span className='span-description'>Luxury Room</span>
            <p className='span-description-introduce'>{room.description}</p>
          </div>
        </Space>
      ))}
    </Row>
  );
}

export default RoomTypes;
