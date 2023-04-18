import DashboardBox from "../components/DashboardBox";
import CustomerAccount from "../components/CustomerAccount";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from '../../../../firebase'

import { useEffect, useState } from "react";

export default function Main() {
    const [data, setData] = useState([]);

    function formatDate(timestamp: { seconds: number, nanoseconds: number }) {
        const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    useEffect(() => {
        const fetchCollection = async () => {
            const q = query(collection(db, "root"));
            const querySnapshot = await getDocs(q);
            const documents: any = [];
            querySnapshot.forEach((doc) => {
                const formattedCheckin = formatDate(doc.data().checkIn); // format timestamp
                const formattedCheckout = formatDate(doc.data().checkOut);
                const newData: any = {
                    ...doc.data(),
                    checkIn: formattedCheckin, checkOut: formattedCheckout
                }

                documents.push(newData); // add document data to array
            });
            setData(documents);
        };
        fetchCollection();
    }, [db]);
    console.log(data)

    return (
        <div style={{ backgroundColor: '#ede2e1', minHeight: '100vh' }}>
            <h2>
                DASHBOARD
            </h2>
            <div style={{ margin: 20 }}>
                <DashboardBox />
            </div>
            <div>
                <CustomerAccount data={data} />
            </div>
        </div>

    );
};


