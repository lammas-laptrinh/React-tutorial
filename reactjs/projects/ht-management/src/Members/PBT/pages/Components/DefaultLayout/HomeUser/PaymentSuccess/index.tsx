import { Space } from "antd"
import './PaymentSucess.css'
import {
  CollectionReference,
  collection,
  getDoc, getDocs, doc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useState, useEffect } from 'react';
function PaymentSuccess() {
  const [user, setUser] = useState<any>(null);

  const paymentID = localStorage.getItem('paymentID')
  const userId = localStorage.getItem('loginaccount')
  const dateTimeNow = localStorage.getItem('dateTimeNow')


  useEffect(() => {
    const colRef: CollectionReference = collection(db, 'users');
    getDocs(colRef)
      .then((querySnapshot) => {
        const respon = querySnapshot.docs.map((doc) => {
          return doc.id;
        });
        if (userId && respon.includes(userId)) {
          const userRef = doc(db, 'users', userId);
          getDoc(userRef)
            .then((snapshot) => {
              if (snapshot.exists()) {
                const userData = snapshot.data();
                setUser(userData);
              } else {
                console.log('User document does not exist');
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log('User does not exist or is not in the list of users');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <Space className="payment-sucess-wrapper">
      <Space className="payment-sucess-form">
        <Space className="payment-sucess-header">
          <Space className="border-checked">
            <img className="checked-img" src="https://img.icons8.com/office/40/000000/ok--v1.png" alt="ok--v1" />
          </Space>
          <h2 className="sucess-title">
            Payment Sucess
          </h2>
          <h2 className="success-price">
            100 $
          </h2>
        </Space>

        <Space className="payment-sucess-content">

          <Space className="content-span">
            <span>PaymentId</span>
            <span className="span-bold">{paymentID}</span>
          </Space>
          <Space className="content-span">
            <span>Payment Time</span>
            <span className="span-bold">{dateTimeNow}</span>
          </Space>
          <Space className="content-span">
            <span>Payment Method</span>
            <span className="span-bold">Paypal</span>
          </Space>
          {user &&
            <Space className="content-span">
              <span>Sender</span>
              <span className="span-bold">{user.name}</span>
            </Space>
          }
        </Space>

        <Space className="payment-sucess-amount">
          <Space className="content-span">
            <span>Amount</span>
            <span className="span-bold">100$</span>
          </Space>
        </Space>



      </Space>
    </Space>
  )
}

export default PaymentSuccess