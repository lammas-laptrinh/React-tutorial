import RoomImage from "../components/RoomImage";
import { useParams } from 'react-router-dom';
import RoomInfo from "../components/RoomInfo";
import { useEffect, useState } from "react";
import { collection, collectionGroup, getDocs, query } from "firebase/firestore";
import { firestoreDB } from "../../Firebase/firebase";


export default function RoomDetail() {
    const { roomId } = useParams<{ roomId: string }>();
    //setup FireBase
    const [data, setData]: any = useState([]);
    useEffect(() => {
        const fetchCollection = async () => {
            const allRoomsQuery = query(collection(firestoreDB, "rooms"));
            const allRoomTypesQuery = collectionGroup(firestoreDB, "roomTypes");
            const allStatusQuery = collectionGroup(firestoreDB, "status");
            const [roomsSnapshot, roomTypesSnapshot, StatusSnapShot] = await Promise.all([
                getDocs(allRoomsQuery),
                getDocs(allRoomTypesQuery),
                getDocs(allStatusQuery)
            ]);

            const roomsData = roomsSnapshot.docs.map((doc) => doc.data());
            const roomTypesData = roomTypesSnapshot.docs.map((doc) => doc.data());
            const statusData = StatusSnapShot.docs.map((doc) => doc.data());
            const data = { rooms: roomsData, roomTypes: roomTypesData, status: statusData };
            setData(data);
        };
        fetchCollection();
    }, [firestoreDB]);
    // Find the room object with the matching id
    const matchedRoom = data?.rooms?.find((room: any) => room.roomTypeId === roomId);
    //This is the main Detail Page that had been assembled from many components. also it url is room/:roomId
    return (
        <div className="displayFlex">
            <div className="RoomImageFlex">
                <RoomImage />
            </div>
            <div className="RoomInfoFlex">
                <RoomInfo row={matchedRoom!} />
            </div>

        </div>
    )
}