import Sider from '../components/Sider';
import Navbar from '../components/Navbar';
import '../../CSS/index.css';

export default function MainLayout({ children }: any) {
    console.log(children)
    return (
        <div className='MainContainer'>
            <div className='PSNavbar'>
                <Navbar />
            </div>
            <div className='PSSider' >
                <Sider />
            </div>
            <div className='PSMain'>
                {children}
            </div>
        </div>
    );
}





