import { Space } from "antd"
import room from '../static/room.png'
import SubInfo from "./subInfo"
import Icon from '../static/Icon.png'

export default function PaymentRoomDetail() {
    return (
        <Space className="paymentRoom">
            <img src={room} className="img" alt="Logo" />
            <Space className="roomDetail">
                <div className="title">
                    <h2>King Room</h2>
                </div>
                <div className="roomInfo">
                    <p>orem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
                <div className="border"></div>
                <SubInfo leftLabel="Dịch vụ" rightLabel="Wifi, Gym, food" boldLeft/>
                <SubInfo leftLabel="Discount" rightLabel="12/06/2023- 12/08/2023" boldLeft/>
                <div className="border"></div>
                <div className="tick" >
                    <img src={Icon} alt="Logo" />
                    <span style={{ marginLeft: '10px' }}>Secure Payment</span>
                </div>
            </Space>
        </Space >
    )
}