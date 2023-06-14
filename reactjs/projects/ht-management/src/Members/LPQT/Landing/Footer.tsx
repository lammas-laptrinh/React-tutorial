import { Image } from "antd";
import Contact from '../../LPQT/assets/images/land-contact.svg';
import Content from '../../LPQT/assets/images/land-content.svg';
import './index.css'
const Footer = () => {
    return (

        <div style={{ display: "flex", justifyContent: "space-around", flexDirection: 'column', marginTop: 150 }}>
            <div style={{ backgroundImage: `url(${Content})`, height: 418, width: '100vw', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
            <Image src={Contact} preview={false} style={{ marginTop: 206, height: 169 }} />
            <div style={{ height: 210, marginTop: 100, display: 'flex', justifyContent: 'center' }}>
                <div className="about-col" style={{ marginRight: 90 }}>
                    <div className="title">About</div>
                    <p className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>
                </div>
                <div className="about-col">
                    <h2 className="title">Room</h2>
                    <p className="desc">
                        Single
                        <br />
                        King
                        <br />
                        Queen
                        <br />
                        Double
                        <br />
                        Lanai
                    </p>
                </div>
                <div className="about-col">
                    <h2 className="title">Links</h2>
                    <p className="desc">
                        About
                        <br />
                        Service
                        <br />
                        FAQ
                        <br />
                        Term & Condition

                    </p>
                </div>
                <div className="about-col">
                    <h2 className="title">Social</h2>
                    <p className="desc">
                        Facebook
                        <br />
                        Twitter
                        <br />
                        Instagram
                    </p>
                </div>
                <div className="about-col">
                    <h2 className="title">Contact</h2>
                    <p className="desc">
                        Address
                        <br />
                        090000000
                        <br />
                        info@yourmain.com
                    </p>
                </div>
            </div>
            <div className='copy' >
                Copyright 2023. design by dtd
            </div>
        </div>
    );
};

export default Footer;
