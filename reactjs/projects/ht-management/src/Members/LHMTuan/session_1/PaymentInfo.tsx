import { useEffect, useState } from "react";
import TOPImg from "../assets/img/room.png";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { collection, getDocs } from "@firebase/firestore";
import { firestoreDB } from "../../../firebase";
import React from "react";

export default function PaymentInfo() {
  //  const { rows } = props;

  const [booking, setBooking] = useState<any>({});
  const [room, setRoom] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, "booking"));
        const dataBooking = querySnapshot.docs.map((doc) => {
          const BookingItem = doc.data();
          const checkIn = BookingItem.checkIn.toDate
            ? new Date(BookingItem.checkIn.toDate())
            : null;
          const checkOut = BookingItem.checkOut.toDate
            ? new Date(BookingItem.checkOut.toDate())
            : null;

          const formattedCheckIn = checkIn
            ? `${checkIn.getDate()}/${
                checkIn.getMonth() + 1
              }/${checkIn.getFullYear()}`
            : "";
          const formattedCheckOut = checkOut
            ? `${checkOut.getDate()}/${
                checkOut.getMonth() + 1
              }/${checkOut.getFullYear()}`
            : "";

          return {
            ...BookingItem,
            checkIn: formattedCheckIn,
            checkOut: formattedCheckOut,
          };
        });
        setBooking(dataBooking);
        console.log("dataBooking", dataBooking);
      } catch (error) {
        console.error("Error retrieving booking data:", error);
      }
    };
    fetchData();
  }, []);

  const [service, setService] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(firestoreDB, "services")
        );
        const dataService = querySnapshot.docs.map((doc) => doc.data());
        setService(dataService);
      } catch (error) {
        console.error("Error retrieving services data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("services", service);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, "rooms"));
        const dataRooms = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRoom(dataRooms); // Access the first element in the array
        console.log("dataRooms", dataRooms);
      } catch (error) {
        console.error("Error retrieving rooms data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="payment-info-container">
      <div className="payment-info-top-container">
        {/* Hộp trên */}
        <div
          className="payment-info-top-box"
          style={{
            backgroundImage: `url(${TOPImg})`,
          }}
        />
        {/* Hộp dưới */}
        <div className="payment-info-bottom-box" />
      </div>

      {/* Đoạn text của hộp dưới */}
      <div className="payment-info-details-box">
        <>
          <React.Fragment>
            <div className="ItemRoomType">{room[0]?.name}</div>
            <div className="ItemDes">{room[0]?.description}</div>
            <div className="Strikethrough"></div>
            <div className="service">Dịch vụ</div>
            <div className="ItemService">{service[0]?.name}</div>
            <div className="checkout">Thời gian</div>
            <div className="ItemCheckout">
              {booking[0]?.checkIn} - {booking[0]?.checkOut}
            </div>
            <div className="Strikethrough"></div>
          </React.Fragment>
        </>

        <div className="Secure">
          <SafetyCertificateOutlined />
          <span>Secure Payment</span>
        </div>
      </div>
    </div>
  );
}
