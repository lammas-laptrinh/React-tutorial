import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';

export default function Service() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
}
