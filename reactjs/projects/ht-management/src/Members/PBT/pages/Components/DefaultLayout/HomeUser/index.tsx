import { useState, useEffect } from 'react'
import HomeHeader from './HomeHeader'
import './HomeUser.css'
import { Layout, Row, Col } from 'antd'
import { db } from '../firebase'
import {
  CollectionReference,
  collection,
  onSnapshot,

} from "firebase/firestore";
import { RoomType } from './type';
import RoomTypes from './RoomTypes'
import ServiceLayout from './ServiceLayout'
import Introduce from './Introduce'
import Footer from './Footer'
import { Link } from 'react-router-dom';

function HomeUser() {
  const [database, setDatabase] = useState<RoomType[]>([]);
  const [selectedRoomType, setSelectedRoomType] = useState('Single');
  const [filteredRooms, setFilteredRooms] = useState<RoomType[]>([]);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const colRef: CollectionReference = collection(db, 'Room');
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const respon = snapshot.docs.map((doc) => {
          const req = doc.data();
          return {
            roomName: req.RoomName,
            roomDescription: req.RoomDescription,
            roomImage: req.RoomImage,
            roomType: req.RoomType,
          };
        });
        setDatabase(respon);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);
   
  
  useEffect(() => {
    if (isFirstRender && !loading) {
      setSelectedRoomType('Single');
      setIsFirstRender(false);
    }
  }, [isFirstRender, loading]);

  useEffect(() => {
    if (!isFirstRender && !loading) {
      const updatedFilteredRooms = database.filter((room) => room.roomType === selectedRoomType);
      setFilteredRooms(updatedFilteredRooms);
    }
  }, [selectedRoomType, isFirstRender, loading, database]);
  
  
  return (
    <Layout className="wrapper-home">
      <HomeHeader />
      <Row className="room-type-wrapper">
        <Row className="title-h1">
          <h1 className='title-roomtype'>Room Type</h1>
        </Row>
        <Col className="Roomtype-list">
          <button className="span-list-room" onClick={() => setSelectedRoomType('Single')}>
            Single Room
          </button>
          <button className="span-list-room" onClick={() => setSelectedRoomType('Double')}>
            Double Room
          </button>
          <button className="span-list-room" onClick={() => setSelectedRoomType('King')}>
            King Room
          </button>
          <button className="span-list-room" onClick={() => setSelectedRoomType('Queen')}>
            Queen Room
          </button>
          <button className="span-list-room" onClick={() => setSelectedRoomType('Lanai')}>
            Lanai Room
          </button>
        </Col>

        <Row className="room-types">
          {filteredRooms.map((room,index) => (
            <Link
              key={index}
              className="room-type"
              to={`/room-detail/${room.roomType}`}
            >
              <RoomTypes roomList={[room]} />
            </Link>
          ))}
        </Row>

        <Row>
          <ServiceLayout />
        </Row>
        <Row>
          <Introduce />
        </Row>

        <Row className='banner-introduce'>
          <img className='banner-img' src='https://res.cloudinary.com/dpdzbuiml/image/upload/v1684834968/image_2_gh7yf1.png' />
        </Row>

        <Row className='banner-ntt'>
          <img className='banner-img-ntt' src='https://res.cloudinary.com/dpdzbuiml/image/upload/v1684835245/Screenshot_2023-03-23_at_20.34_1_tbxqig.png' />
        </Row>

        <Row>
          <Footer />
        </Row>


      </Row>
    </Layout>
  );
}

export default HomeUser;
