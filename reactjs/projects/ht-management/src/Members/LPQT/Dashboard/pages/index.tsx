import DashboardBox from "../components/DashboardBox";
import CustomerAccount from "../components/CustomerAccount";
import { Input } from 'antd';
import '../../CSS/index.css'
import { useEffect, useState } from "react";
import { firestoreDB } from '../../Firebase/firebase'
import { collection, getDocs, collectionGroup } from "firebase/firestore";

export default function DashboardPage() {
    const { Search } = Input;
    const [data, setData]: any = useState([]);

    //config date form firebase
    function formatDate(timestamp: { seconds: number, nanoseconds: number }) {
        const date = new Date(timestamp?.seconds * 1000 + timestamp?.nanoseconds / 1000000);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }
    //get all need data from firebase
    useEffect(() => {
        const fetchCollection = async () => {
            const roomDocRef = collection(firestoreDB, "rooms")
            const userDocRef = collectionGroup(firestoreDB, "users");
            const bookingDocRef = collectionGroup(firestoreDB, "booking");
            const roomTypeDocRef = collectionGroup(firestoreDB, "roomTypes");
            const statusesDocRef = collectionGroup(firestoreDB, "status");

            const [roomsSnapshot, usersSnapshot, bookingSnapshot, roomTypesSnapshot, statusesSnapShot] = await Promise.all([
                getDocs(roomDocRef),
                getDocs(userDocRef),
                getDocs(bookingDocRef),
                getDocs(roomTypeDocRef),
                getDocs(statusesDocRef),
            ]);
            //the Firebase booking data
            const bookings = bookingSnapshot.docs.map((doc) => doc.data());
            console.log(bookings)
            //the Firebase roomType data
            const roomtypes = roomTypesSnapshot.docs.map((doc) => doc.data());
            //the Firebase status data
            const statuses = statusesSnapShot.docs.map((doc) => {
                const statusId = doc.id;
                const statusData = doc.data();
                return {
                    ...statusData,
                    statusId: statusId,
                };
            });
            //the Firebase rooms data
            const rooms = await Promise.all(roomsSnapshot.docs.map(async (doc) => {
                const roomId = doc.id;
                const roomData = doc.data();
                const userCheckInRef = collection(roomDocRef, roomId, 'usersCheckIn');
                const userCheckInSnapshot = await getDocs(userCheckInRef);
                const userCheckInData = userCheckInSnapshot.docs.map(checkinDoc => checkinDoc.data());
                return {
                    ...roomData,
                    roomId: roomId,
                    userCheckIn: userCheckInData,
                };
            }));
            //the Firebase users data
            const users = await Promise.all(usersSnapshot.docs.map(async (doc) => {
                const usersData = doc.data();
                const userId = doc.id;
                return {
                    ...usersData,
                    userId: userId,
                }
            }));
            // After get the neeed data, push all in a new data object 
            const data = bookings.map(booking => {
                const formattedCheckin = formatDate(booking.checkIn); // format timestamp
                const formattedCheckout = formatDate(booking.checkOut);
                const room = rooms.find(room => room.roomId === booking.roomId) || {};
                const user = users.find(user => user.userId === booking.userId) || {};
                const roomtype = roomtypes.find(roomtype => roomtype.id === booking.roomTypeId) || {};
                const status: any = statuses.find(status => status.statusId == booking.statusId) || {};
                return { ...booking, ...room, ...user, roomTypeName: roomtype.name, checkIn: formattedCheckin, checkOut: formattedCheckout, status: status?.name };
            });
            setData(data);
        };
        fetchCollection();
    }, [firestoreDB]);
    return (
        <div className='RoomPageContain'>
            <div className='MainViewContainner'>
                <div className='MainViewFlexDB'>
                    <div className="DashboardBigTittle">DashBoard</div>
                    <Search className='SearchBarDB' placeholder="Tìm kiếm" enterButton />
                </div>
                <div className="MT20">
                    <DashboardBox />
                </div>
                <div>
                    <CustomerAccount rows={data!} />
                </div>
            </div>
        </div>
    );
};


