
import { RoomProps } from "../type";

export default function RoomImage({ row }: RoomProps) {
    return (
        <img src={row.img} alt="Room" style={{ maxWidth: '35vw', height: '100vh' }} />
    );
}
