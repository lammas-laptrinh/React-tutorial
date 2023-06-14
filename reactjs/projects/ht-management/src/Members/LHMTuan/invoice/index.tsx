import TOPImg from "../assests/success.png";
import "./index.css";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../../firebase";
import React from "react";

const invoice = () => {
  const [billData, setBillData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, "bill"));
        const data = querySnapshot.docs.map((doc) => {
          const billItem = doc.data();
          const paymentTime = new Date(billItem.paymentTime.toDate());
          return {
            ...billItem,
            paymentTime: paymentTime.toLocaleString(),
          };
        });
        setBillData(data);
        console.log(data);
      } catch (error) {
        console.error("Error retrieving bill data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="Form">
        <React.Fragment key={billData[0]?.id}>
          <img className="img" src={TOPImg} />
          <div className="title-1">Payment Success</div>
          <div className="amount">
            {billData[0]?.amount}
            {billData[0]?.unit}
          </div>
          <div className="line-1" />

          <div className="title-2">
            PaymentID: <div className="data">{billData[0]?.paymentId}</div>
          </div>

          <div className="title-2">
            Payment Time:
            <div className="data">{billData[0]?.paymentTime}</div>
          </div>
          <div className="title-2">
            Payment Method:
            <div className="data"> {`${billData[0]?.paymentMethod}`}</div>
          </div>
          <div className="title-2">
            Sender: <div className="data">{billData[0]?.senderId}</div>
          </div>
          <div className="line-2" />
          <div className="title-2">
            Amount:
            <div className="data">
              {billData[0]?.amount}
              {billData[0]?.unit}
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default invoice;
