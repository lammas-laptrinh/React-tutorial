import '../../CSS/index.css'
import { RoomProps } from "../type";

export default function RoomImage({ row }: RoomProps) {
    //this is the room Image
    return (
        <img className='DetailImage' src={row.img} alt="Room" />
    );
}
