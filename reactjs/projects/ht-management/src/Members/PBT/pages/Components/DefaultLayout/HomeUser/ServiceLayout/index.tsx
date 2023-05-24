import { Space } from 'antd';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import {
  CollectionReference,
  collection,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { ServiceType } from '../type';
import './ServiceLayout.css';

function ServiceLayout() {
  const [database, setDatabase] = useState<ServiceType[]>([]);

  useEffect(() => {
    const colRef: CollectionReference = collection(db, 'Service');
    const queries = query(colRef);
    const unsubscribe = onSnapshot(
      queries,
      (snapshot) => {
        const respon = snapshot.docs.map((doc) => {
          const req = doc.data();
          return {
            nameService: req.NameService,
            serviceDescription: req.ServiceDescription,
          };
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
      <h2 className='service-title'>Services</h2>
      <Space className="content-service">
        {database.map((service, index) => (
          <Space className="colums-space" key={index}>
            <Space className="border-service"> </Space>
            <Space className="title-name">{service.nameService}</Space>
            <Space className="service-description">
              {service.serviceDescription}
            </Space>
          </Space>
        ))}
      </Space>
    </Space>
  );
}

export default ServiceLayout;
