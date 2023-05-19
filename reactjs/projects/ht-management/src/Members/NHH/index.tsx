import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Home from './pages/Home';
=======
import Main from './pages/main';
import Detail from './pages/RoomDetail/roomDetail';
>>>>>>> d33436fbe7f5c00a756708e2c4e83e9d17524acb
export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />      
            <Route path=":id" element={<Detail />} />       
        </Routes>
    );
}