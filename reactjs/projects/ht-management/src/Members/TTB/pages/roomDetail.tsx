
import { useParams } from "react-router-dom";

import { Rooms } from "../types";
import RoomImage from "../components/RoomImage";
import RoomInfo from "../components/roomInfo";

export default function Detail() {
    const { id } = useParams();
    const rooms: Rooms[] = [
        {
            id: "1",
            roomName: 'Room 1',
            bedAmount: 3,
            checkinDate: '11/12',
            checkoutDate: '16/12',
            roomType: 'Standard',
            serviceCount: 2,
            service: ['service 1', 'service 2']
        },
        {
            id: "2",
            roomName: 'Room 2',
            bedAmount: 3,
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'Double',
            serviceCount: 0,
        },
        {
            id: "3",
            roomName: 'Room 3',
            bedAmount: 3,
            checkinDate: '18/12',
            checkoutDate: '20/12',
            roomType: 'King',
            serviceCount: 0,
        },
        {
            id: "4",
            roomName: 'Room 4',
            bedAmount: 3,
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'Standard',
            serviceCount: 0,
        },
        {
            id: "5",
            roomName: 'Room 5',
            bedAmount: 3,
            checkinDate: '12/12',
            checkoutDate: '16/12',
            roomType: 'King',
            serviceCount: 3,
            service: ['service 1', 'service 2', 'service 3']
        },
    ]
    const getRoom = rooms.find(room => room.id === id);
    return (
        <div className="displayFlex roomDetailSite">
            <div className="RoomImageFlex">
                <RoomImage row={getRoom!} />
            </div>
            <div className="RoomInfoFlex">
                <RoomInfo row={getRoom!} />
            </div>

        </div>
    )
}