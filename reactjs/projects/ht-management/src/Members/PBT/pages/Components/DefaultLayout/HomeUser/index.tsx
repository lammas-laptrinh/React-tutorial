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
import RoomTypes from './RoomTypes'
import ServiceLayout from './ServiceLayout'
import Introduce from './Introduce'
import Footer from './Footer'
import { Link } from 'react-router-dom';

function HomeUser() {
  const [database, setDatabase] = useState<any[]>([]);
  const [roomTypes, setRoomTypes] = useState<any[]>([]);
  const [selectedRoomType, setSelectedRoomType] = useState('');

  useEffect(() => {
    const colRef: CollectionReference = collection(db, 'rooms');
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const respon = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setDatabase(respon);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const colRef: CollectionReference = collection(db, 'roomTypes');
    const unsubscribe = onSnapshot(
      colRef,
      (snapshot) => {
        const respon = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setRoomTypes(respon);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    handleRoomTypeClick('l01');
  }, []);

  const handleRoomTypeClick = (typeId: string) => {
    setSelectedRoomType(typeId);
  };

  const filteredRooms = database.filter((room) => room.roomTypeId === selectedRoomType);
  return (
    <Layout className="wrapper-home">
      <HomeHeader />
      <Row className="room-type-wrapper">
        <Row className="title-h1">
          <h1 className='title-roomtype'>Room Type</h1>
        </Row>
        <Col className="Roomtype-list">
          {roomTypes.map((roomType) => (
            <button
              key={roomType.id}
              className="span-list-room"
              onClick={() => handleRoomTypeClick(roomType.id)}
            >
              {roomType.name}
            </button>
          ))}
        </Col>
        <Row className="room-types">
          {filteredRooms.map((room, index) => (
            <Link
              key={index}
              className="room-type"
              to={`/room-detail/${room.roomTypeId}`}
              onClick={() => localStorage.setItem('roomId', room.id)}
            >
              <RoomTypes key={index} roomList={[room]} />
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
