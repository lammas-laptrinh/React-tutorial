import Sider from '../components/Sider';
import Navbar from '../components/Navbar';
import Dashboard from '../../Dashboard/routes';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../../../Pages/Error/NotFound';
import Room from '../../Rooms/routes';
import Service from '../../Service/routes';

export default function MainLayout() {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateAreas: `
                 "sider navbar"
                 "sider main"
                 "sider main"
        `,
                gridTemplateRows: 'auto 1fr', // add this line to spread the rows evenly
                height: '100vh',
            }}
        >
            <div style={{ gridArea: 'navbar', maxHeight: '50px', minWidth: '80vw' }}>
                <Navbar />
            </div>
            <div style={{ gridArea: 'sider', minHeight: '100vh', minWidth:'10vw' }}>
                <Sider />
            </div>
            <div style={{ gridArea: 'main' }}>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="trang-chu" element={<Dashboard />} />
                    <Route path="room/*" element={<Room />} />
                    <Route path="service/*" element={<Service />} />
                </Routes>
            </div>
        </div>
    );
}




