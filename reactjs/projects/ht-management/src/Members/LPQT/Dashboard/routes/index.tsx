import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';

export default function Dashboard() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
}
