
import { useParams } from "react-router-dom";
import PackageInfo from "../components/PackageInfo";
import PaymentDetail from "../components/PaymentDetail";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { collection, collectionGroup, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../Firebase/firebase";

export default function PaymentPage() {
    const { roomId } = useParams<{ roomId: string }>();
    //setup FireBase
    const [data, setData]: any = useState([]);
    useEffect(() => {
        const fetchCollection = async () => {
            const allRoomsQuery = (collection(firestoreDB, "rooms"));
            const allRoomTypesQuery = collectionGroup(firestoreDB, "roomTypes");
            const allStatusQuery = collectionGroup(firestoreDB, "status");
            const [roomsSnapshot, roomTypesSnapshot, StatusSnapShot] = await Promise.all([
                getDocs(allRoomsQuery),
                getDocs(allRoomTypesQuery),
                getDocs(allStatusQuery)
            ]);
            const rooms = await Promise.all(roomsSnapshot.docs.map(async (doc) => {
                const roomId = doc.id;
                const roomData = doc.data();
                const userCheckInRef = collection(allRoomsQuery, roomId, 'usersCheckIn');
                const userCheckInSnapshot = await getDocs(userCheckInRef);
                const userCheckInData = userCheckInSnapshot.docs.map(checkinDoc => checkinDoc.data());
                return {
                    ...roomData,
                    roomId: roomId,
                    userCheckIn: userCheckInData,
                };
            }));
            const filterRoom: any = rooms?.find((room: any) => room.roomId === roomId);
            const roomTypesData = roomTypesSnapshot.docs.map((doc) => doc.data());
            const filterRoomType = roomTypesData?.find((roomType: any) => roomType.id == filterRoom?.roomTypeId)
            const statusData = StatusSnapShot.docs.map((doc) => doc.data());
            const data = { rooms: filterRoom, roomTypes: filterRoomType, status: statusData };
            setData(data);
        };
        fetchCollection();
    }, [firestoreDB]);
    // Find the room object with the matching id

    return (
        <div className="PaymentMainContain">
            <div className="IndexPaymentDetail">
                <PaymentDetail row={data.rooms!} />
            </div>
            <div className="IndexPkgInfo">
                <PackageInfo row={data!} />
            </div>
            <ToastContainer />
        </div>
    )
}

