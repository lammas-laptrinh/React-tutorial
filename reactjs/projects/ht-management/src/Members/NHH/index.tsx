import { Route, Routes } from 'react-router-dom';
export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />      
            <Route path=":id" element={<Detail />} />       
        </Routes>
    );
}