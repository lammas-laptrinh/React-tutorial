import './introduce.css';
import { Space } from 'antd';
import { useState, useEffect } from 'react';
import { StatusType } from '../type';
import { db } from '../../firebase';
import {
  CollectionReference,
  collection,
  onSnapshot,
  query,
} from 'firebase/firestore';

function Introduce() {
  const [database, setDatabase] = useState<StatusType[]>([]);

  useEffect(() => {
    const colRef: CollectionReference = collection(db, 'Status');
    const queries = query(colRef);
    const unsubscribe = onSnapshot(
      queries,
      (snapshot) => {
        const respon = snapshot.docs.map((doc) => {
          const req = doc.data();
          return {
            img1: req.ImageIntroduce1,
            img2: req.ImageIntroduce2,
            img3: req.ImageIntroduce3,
            nameStatus: req.NameStatus,
            introduce: req.introduce,
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
    <Space className="introduce-wrapper">
      {database.length > 0 && (
        <Space className="introduce-title-content">
          <h2 className="title-introduce">{database[0].nameStatus}</h2>
          <p className="introduce-content">{database[0].introduce}</p>
        </Space>
      )}
      {/* Các phần tử khác */}
      {database.length > 0 && (
        <>
          <img className="img-introduce" src={database[0].img1} alt="Image 1" />
          <img className="img-introduce" src={database[0].img2} alt="Image 2" />
          <img className="img-introduce" src={database[0].img3} alt="Image 3" />
        </>
      )}
    </Space>
  );
}

export default Introduce;
