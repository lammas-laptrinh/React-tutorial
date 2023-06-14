import { useEffect, useState } from "react";
import { firestoreDB } from "../../../../firebase";

import { BookingList } from "../types";
import { Table } from "antd";
import columns from "./columns";
import { collection, getDocs } from "@firebase/firestore";

function Footer() {
  const [data, setData] = useState<BookingList[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersSnapshot = await getDocs(collection(firestoreDB, "users"));
        const bookingSnapshot = await getDocs(
          collection(firestoreDB, "booking")
        );
        const statusSnapshot = await getDocs(collection(firestoreDB, "status"));
        const usersData = usersSnapshot.docs.map((doc) => doc.data());
        const bookingData = bookingSnapshot.docs.map((doc) => doc.data());
        const statusData = statusSnapshot.docs.map((doc) => doc.data());
        const UpdateData = usersData.map((user) => {
          const booking = bookingData[0];
          const status = statusData[0];
          const checkInDate = new Date(booking?.checkIn?.seconds * 1000);
          const checkOutDate = new Date(booking?.checkOut?.seconds * 1000);
          return {
            avatar: user.avatar,
            name: user.name,
            phoneNumber: user.phoneNumber,
            roomType: booking?.roomTypeId,
            checkIn: checkInDate.toLocaleString(),
            checkOut: checkOutDate.toLocaleString(),
            status: status?.name,
            actions: status?.color,
          };
        });

        setData(UpdateData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Footer">
      <div className="TitleName">
        Booking List
        <Table dataSource={data} columns={columns} />
      </div>
    </div>
  );
}

export default Footer;
