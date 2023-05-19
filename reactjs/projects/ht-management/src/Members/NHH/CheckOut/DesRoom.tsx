import React from 'react';
import { Image } from 'antd';
import "./Payment.scss"
import { BiCheckShield } from "react-icons/bi";
const DetailRoom = [
  {
    roomType: 'King room',
    des: 'orem Ipsum has been the industry standard dummy text ever since the 1500s',
    service: ['Wifi , ', 'Gym, ', 'Food '],
    Checkout: '12/06/2023- 12/08/2023'
  },

]
const App: React.FC = () => (
  <><Image className='img'
    width={510} height={300}
    src="https://s3-alpha-sig.figma.com/img/528b/145f/221d81a17c9eab180b803385b4c31fb1?Expires=1684108800&Signature=ay8CK8xS6CYkNrkmuo1eCzY5Qalw8DKz~gfkynrG-wPQgu4tx4VVoIN4LcGZfxR5VQQONCK-4hhI4VS6xNKv~gyUopGNlv9bAsasMjHKZeJUQ1eestzJ80U2GXmOP-nWZR0ZQx8Ko6uFxDgb1VZC0ebhesy6VITJuRn9MbA~UEKRAyYECIuURfUW15OoNuMofMvwM-jhhCIFGYokpwmpeHTUkqubHI582ZxaxDqILorherB6Jn1-LKeH3gJOryOxTKNhuzpwprwpuAVGJBJiQkfSqdHBZrBjVnIeeLPRtFmpL7W453Bk9dh79BqGsIIhJ5LKc0EW9Vxv0gd0~HByWw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
    {DetailRoom.map((item) => (
      <div className="Room">
        <div className="Room__Type">{item.roomType}</div>
        <div className="Room__Des">{item.des}</div>
        <hr />
        <div className="Room__Service">
          <div className="Service__Name">Dịch vụ</div>
          <div className="Service__item">{item.service}</div>
        </div>
        <div className="Room__Service">     
        <div className="Service__Name">Thời Gian</div>
          <div className="Service__item">{item.Checkout}</div>
          </div> <hr />
          <div className="Secure-Payment"><BiCheckShield /> Secure Payment</div>
      </div>
    ))}
  </>
);

export default App;