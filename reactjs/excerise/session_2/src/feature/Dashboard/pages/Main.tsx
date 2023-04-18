import DashboardBox from "../components/DashboardBox";
import CustomerAccount from "../components/CustomerAccount";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from '../../../../firebase'
import { useEffect, useState } from "react";
import { Input } from 'antd';

export default function Main() {
    const [data, setData] = useState([]);
    const { Search } = Input;
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

                documents.push(newData);
            });
            setData(documents);
        };
        fetchCollection();
    }, [db]);
    console.log(data)

    return (
        <div style={{ backgroundColor: '#ede2e1', minHeight: '100vh', overflow: 'hidden' }}>
            <div style={{ margin: '0 auto', paddingTop: '20px', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold', marginRight: '10px' }}>DASHBOARD</div>
                    <Search style={{ maxWidth: '300px' }} placeholder="input search text" enterButton />
                </div>
                <div style={{ margin: '20px' }}>
                    <DashboardBox />
                </div>
                <div>
                    <CustomerAccount data={data} />
                </div>
            </div>
        </div>
    );


};


