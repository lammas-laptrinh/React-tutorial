import RoomImage from "../components/RoomImage";
import { useParams } from 'react-router-dom';
import RoomInfo from "../components/RoomInfo";
import { roomData } from "../../Constant/Global";


export default function RoomDetail() {
    const { roomId } = useParams<{ roomId: string }>();
    //the Sample Data made from me, just because it 2 lazy to setup firebase Data :<
    
    // Find the room object with the matching id
    const matchedRoom = roomData.find((room) => room.id === roomId);

    //This is the main Detail Page that had been assembled from many components. also it url is room/:roomId
    return (
        <div className="displayFlex">
            <div className="RoomImageFlex">
                <RoomImage row={matchedRoom!} />
            </div>
            <div className="RoomInfoFlex">
                <RoomInfo row={matchedRoom!} />
            </div>

        </div>
    )
}