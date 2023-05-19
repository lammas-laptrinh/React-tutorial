import { Link, useParams } from 'react-router-dom';
import { rooms } from './common';
import { ArrowLeftOutlined } from '@ant-design/icons';
const RoomDetail = () => {
    const { id } = useParams<{ id: string }>();
    const room = rooms.find((r) => r.id === parseInt(id || ""));
    if (!room) {
        return <div>Room not found</div>;
    }
    return (
        <div>
            <h1>{room.title}</h1>
            <p>{room.details}</p>
            <Link to="/"><ArrowLeftOutlined /></Link>
        </div>

    );
};

export default RoomDetail;