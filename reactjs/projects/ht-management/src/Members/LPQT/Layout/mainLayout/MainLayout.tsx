import Sider from '../components/Sider';
import Navbar from '../components/Navbar';
import Main from '../../Dashboard/pages/Main';

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
            <div style={{ gridArea: 'navbar', maxHeight: '50px', minWidth: '100vw' }}>
                <Navbar />
            </div>
            <div style={{ gridArea: 'sider' }}>
                <Sider />
            </div>
            <div style={{ gridArea: 'main' }}>
                <Main />
            </div>
        </div>
    );
}




