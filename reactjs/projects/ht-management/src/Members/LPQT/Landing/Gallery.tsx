import { Typography } from "antd";
import './index.css'
import Gallery_1 from '../../LPQT/assets/images/land-gallery-1.svg';
import Gallery_2 from '../../LPQT/assets/images/land-gallery-2.svg';
import Gallery_3 from '../../LPQT/assets/images/land-gallery-3.svg';
const { Title } = Typography;
const Gallery = () => {
    return (
        <div style={{ marginTop: 137, display: 'flex', flexDirection: 'row' }}>
            <div className="gallery-col">
                <Title className="title">Our Gallery</Title>
                <Title className="desc">orem Ipsum has been the industry's standard
                    dummy text ever since the 1500s,</Title>
            </div>
            <div style={{ backgroundImage: `url(${Gallery_1})`, height: 450, width: 271, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginLeft: 147 }} />
            <div style={{ backgroundImage: `url(${Gallery_2})`, height: 450, width: 271, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginLeft: 41 }} />
            <div style={{ backgroundImage: `url(${Gallery_3})`, height: 450, width: 271, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', marginLeft: 41 }} />
        </div>
    );
};

export default Gallery;
