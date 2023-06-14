
import { SafetyCertificateOutlined } from '@ant-design/icons';

import '../../../LPQT/CSS/index.css'

export default function PackageInfo(props: any) {
    const { row } = props
    return (
        <div className='PosRelative'>
            {/*  Hộp trên */}
            <div
                className='TopBox' style={{ backgroundImage: `url(${'https://media.cnn.com/api/v1/images/stellar/prod/181102094045-angad-arts-hotel-st-louis.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618'})` }}
            />
            {/*  Đoạn text của hộp dưới */}
            <div
                className='UnderBoxText'
            >
                <div className='text-item' >
                    <span className='PackageInfoTittle'>{row?.roomTypes?.name} Room</span>
                </div>
                <div className='DetailDePayment'>
                    {row?.description?.slice(0, 90)}
                </div>
                <div className='BorderBottom'></div>
                <div className='PackageInfoLeft'>
                    <div className='PackageInfoLeftInner'>
                        <div className='PkgInfoItemTittle'>
                            Dịch vụ
                        </div>
                        <div className='LeftAuto'>
                            Wifi,  Gym, Food
                        </div>
                    </div>
                </div>
                <div className='PackageInfoLeft' >
                    <div className='PackageInfoLeftInner' >
                        <div className='PkgInfoItemTittle'>
                            Thời gian
                        </div>
                        <div className='LeftAuto'>
                            20/11 - 23/11
                        </div>
                    </div>
                </div>
                <div className='BorderBottom'></div>
                <div className='Weight600'>
                    <SafetyCertificateOutlined className='SafetyCertificateOutlined' />Secure Payment
                </div>
            </div>
        </div >
    )
}


