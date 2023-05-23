import { Layout } from 'antd';
import Footer from './Footer';
import Gallery from './Gallery';
import Services from './Services';
import RoomType from './RoomType'
import HeaderBar from './HeaderBar';
import './index.css'
const Landing = () => {
    return (
        <Layout>
            <div className='room-header'>
                <HeaderBar />
            </div>
            <div className='room-type'>
                <RoomType />
            </div>
            <div>
                <Services />
            </div>
            <div className='galley'>
                <Gallery />
            </div>
            <div>
                <Footer />
            </div>
        </Layout>
    );
};

export default Landing;
