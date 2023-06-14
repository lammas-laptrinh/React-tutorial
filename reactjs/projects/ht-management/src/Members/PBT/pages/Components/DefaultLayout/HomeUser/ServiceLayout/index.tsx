import { Space } from 'antd';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
  CollectionReference,
  collection,
  onSnapshot,
} from 'firebase/firestore';
import './ServiceLayout.css';

function ServiceLayout() {
  const [database, setDatabase] = useState<any[]>([]);

  useEffect(() => {
    const colRef: CollectionReference = collection(db, 'services');
    const unsubscribe = onSnapshot(
        colRef,
        (snapshot) => {
            const respon = snapshot.docs.map((doc) => {
                return doc.data();
            });
            setDatabase(respon);
        },
        (error) => {
            console.log(error);
        }
    );
    return () => unsubscribe();
}, []);

  return (
    <Space className="service-wrapper">
      <Space className='service-title-wrapper'>
      <h2 className='service-title'>Services</h2>
      </Space>
      <Space className="content-service">
        {database.map((index) => (
          <Space className="colums-space" key={index}>
            <Space className="border-service"> </Space>
            <Space className="title-name">Lorem Ipsum</Space>
            <Space className="service-description">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </Space>
          </Space>
        ))}
      </Space>
    </Space>
  );
}

export default ServiceLayout;
