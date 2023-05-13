import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/RoomDetail/roomDetail';
export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />      
            <Route path=":id" element={<Detail />} />       
        </Routes>
    );
}