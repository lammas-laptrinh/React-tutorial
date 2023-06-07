
import './Footer.css'
import { Space } from 'antd'
function Footer() {
    return (
        <Space className='copyright'>
        <Space className='footer-wrapper'>
            <Space className='about'>
                <h2 className='title-footer'>About</h2>
                <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </Space>
            <Space className='room-footer'>
                <h2 className='title-footer'>Room</h2>
                <ul className='ul-list-fotter'>
                    <li>Single</li>
                    <li>Double</li>
                    <li>Queen</li>
                    <li>King</li>
                    <li>Lanai</li>
                </ul>
            </Space>
            <Space className='links-footer'>
                <h2 className='title-footer'>Links</h2>
                <ul className='ul-list-fotter'>
                    <li>About</li>
                    <li>Service</li>
                    <li>FAQ</li>
                    <li>Term & Condition</li>
                </ul>
            </Space>
            <Space className='social-footer'>
                <h2 className='title-footer'>Social</h2>
                <ul className='ul-list-fotter'>
                    <li>Facebook</li>
                    <li>Twister</li>
                    <li>Tiktok</li>
                </ul>
            </Space>
            <Space className='contact-footer'>
            <h2 className='title-footer'>Contact</h2>
                <ul className='ul-list-fotter'>
                    <li>HCM</li>
                    <li>0332089538</li>
                    <li>Phamthai180@gmail.com</li>
                </ul>

            </Space>
            
        </Space>
        <span>Copyright 2023. design by dtd</span>
        </Space>
    )
}

export default Footer