import { Route, Routes } from 'react-router-dom';
import RoomMain from '../pages';
import RoomDetail from '../pages/Detail';

export default function Room() {
    return (
        <Routes>
            <Route path="/" element={<RoomMain />} />
            <Route path=":roomId" element={<RoomDetail />} />
        </Routes>
    );
}
