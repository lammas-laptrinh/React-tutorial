import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';

export default function Room() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path=":roomId" element={<Detail />} />
        </Routes>
    );
}
