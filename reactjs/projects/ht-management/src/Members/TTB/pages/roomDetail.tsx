
import { useParams } from "react-router-dom";

// import { Rooms } from "../types";
// import RoomImage from "../components/RoomImage";
// import RoomInfo from "../components/roomInfo";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestoreDB } from "@src/firebase";

export default function Detail() {
    const { id } = useParams();
    const [roomList, setRoomList] = useState<any[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const roomsRef = collection(firestoreDB, 'rooms');
            const roomSnapshot = await getDocs(roomsRef);

            const rooms = Promise.all(roomSnapshot.docs.map(async (doc) => {
                const roomData = doc.data();
                const roomId = doc.id;
                const userCheckInRef = collection(roomsRef, roomId, 'usersCheckIn');
                const userCheckInSnapshot = await getDocs(userCheckInRef);
                const userCheckInData = userCheckInSnapshot.docs.map(checkinDoc => checkinDoc.data());
                return {
                    ...roomData,
                    id: roomId,                
                    userCheckIn: userCheckInData[0],
                };
            }));
            setRoomList(await rooms);
        };

        fetchData();
    }, []);
/*     console.log(roomList); */
    
    const getRoom = roomList?.find(room => room?.id === id);
/*     console.log("getroom", getRoom); */
    
    return (
        <div className="displayFlex roomDetailSite">
            <div className="RoomImageFlex">
                {/* <RoomImage row={getRoom!} /> */}
            </div>
            <div className="RoomInfoFlex">
                {/* <RoomInfo row={getRoom!} /> */}
            </div>

        </div>
    )
}