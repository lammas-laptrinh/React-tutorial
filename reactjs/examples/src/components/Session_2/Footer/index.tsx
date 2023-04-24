import React, { useEffect, useState } from "react";
import { bookingCollection } from "../../../firebase/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { BookingList } from "../types";
import { Table } from "antd";
import columns from "./columns";

function Footer() {
  const [book, setBook] = useState<BookingList[]>([]);
  const [unsubscribe, setUnsubscribe] = useState<(() => void) | null>(null);

  useEffect(() => {
    const unsubscribeRef = onSnapshot(
      bookingCollection,
      (snapshot: QuerySnapshot<DocumentData>) => {
        setBook(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }
    );
    setUnsubscribe(() => unsubscribeRef);
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);
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
