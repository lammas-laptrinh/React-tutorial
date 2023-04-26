
import { RoomProps } from "../type";

export default function RoomImage({ row }: RoomProps) {
    //this is the room Image
    return (
        <img src={row.img} alt="Room" style={{ maxWidth: '35vw', height: '100vh' }} />
    );
}
