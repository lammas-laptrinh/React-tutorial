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
    src="https://s3-alpha-sig.figma.com/img/528b/145f/221d81a17c9eab180b803385b4c31fb1?Expires=1685923200&Signature=J732MexuKAeTgPl3pzd5-4ry-aLJuP5qMpNtg1GyzrYwA-x3WNAVVvtGGErf2BZwrA9ZWyfSirvK-eHnK~JABDg0VuxE5xJiSCiREajHsXAtnHJ6~dOb0WRvhn3aRpxbs-sIbc7UaG1uSrIZ945S-zWYVbqR32x~vt3O6p7jyppPikK8N6zZVMTlgTQPfACpyRNhi5sHe6ooqrBqhZ-JAVEcpWTE68HzYDzOPNyNedtopfc-Ud93a40nts~lKC9YWJx6bjhWpfNSUnWensDRl9j8x71EAYtw2-lZZgtJzZXTZ4ypZnVtA2sYaRm2Y8PlFO4cgo27X3Z3QLbcpTNVlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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