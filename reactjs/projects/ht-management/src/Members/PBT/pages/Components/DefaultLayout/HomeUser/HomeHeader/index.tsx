
import { Layout, Row } from 'antd'
import './header.css'


function HomeHeader() {
  return (
    <Layout className='wrapper-banner'>
            <Row style={{ backgroundColor: '#ffffff' }} className='banner'>
                <img className='img-banner' src='https://res.cloudinary.com/dpdzbuiml/image/upload/v1684740406/banner_pv4bij.jpg' />
                <Row className='list-li'>
                    <ul className='ul-list'>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Room</li>
                        <li>About Us</li>
                    </ul>
                </Row>
                <Row className='contact'>
                    <Row className='phone-contact'>
                        <img className='phone-img' src="https://img.icons8.com/ios-glyphs/60/phone--v1.png" alt="phone--v1" />
                        <span className='phone-span'>090-000-000</span>
                    </Row>
                    <Row className='offer-contact'>
                        <span className='offer-span'>Save 10% of booking right now!</span>
                    </Row>
                    <Row className='button-booking'>
                        <button className='booking-button'>Book Now</button>
                        <img className='arrow-right' width="30" height="30" src="https://img.icons8.com/ios/50/right--v1.png" alt="right--v1" />
                    </Row>
                </Row>
            </Row>

        </Layout>
  )
}

export default HomeHeader