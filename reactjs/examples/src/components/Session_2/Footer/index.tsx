import React, { useEffect, useState } from "react";
import { bookingCollection } from "../../../firebase/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { BookingList } from "../types";
import { Table } from "antd";

function Footer() {
  const dataSource = [
    {
      key: "Action",
      Action: "...",
    },
  ];
  const columns = [
    {
      title: "Avatar",
      dataIndex: "Avatar",
      key: "Avatar",
    },
    {
      title: "Name",
      dataIndex: "Ten",
      key: "Name",
    },
    {
      title: "Phone",
      dataIndex: "SDT",
      key: "Phone",
    },
    {
      title: "Room",
      dataIndex: "LoaiPhong",
      key: "Room",
    },
    {
      title: "CheckIn",
      dataIndex: "Checkin",
      key: "CheckIn",
    },
    {
      title: "CheckOut",
      dataIndex: "Checkout",
      key: "CheckOut",
    },
    {
      title: "Status",
      dataIndex: "TrangThai",
      key: "Status",
    },
    {
      title: "Action",
      dataIndex: "HanhDong",
      key: "Action",
    },
  ];
  const [book, setBook] = useState<BookingList[]>([]);
  useEffect(
    () =>
      onSnapshot(bookingCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setBook(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );
  console.log(book, "BookingList");
  return (
    <div className="Footer">
      <h1>Booking List</h1>
      <Table
        dataSource={book}
        columns={columns}
        style={{ width: "100%", marginTop: "20px" }}
      />
    </div>
  );
}

export default Footer;
