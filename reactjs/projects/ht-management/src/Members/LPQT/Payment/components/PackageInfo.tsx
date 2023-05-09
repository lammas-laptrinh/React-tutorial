
import { RoomProps } from '../../Room/type';
import { SafetyCertificateOutlined } from '@ant-design/icons';

import '../../../LPQT/CSS/index.css'

export default function PackageInfo(props: RoomProps) {
    const { row } = props
    return (
        <div className='PosRelative'>
            {/*  Hộp trên */}
            <div
                className='TopBox' style={{ backgroundImage: `url(${row.img})` }}
            />
            {/* Hộp dưới */}
            <div
                className='UnderBox'
            >
            </div>
            {/*  Đoạn text của hộp dưới */}
            <div
                className='UnderBoxText'
            >
                <div className='text-item' >
                    <span className='PackageInfoTittle'>{row.roomType?.roomTypeName} Room</span>
                </div>
                <div className='DetailDePayment'>
                    {row.description?.slice(0, 90)}
                </div>
                <div className='BorderBottom'></div>
                <div className='PackageInfoLeft'>
                    <div className='PackageInfoLeftInner'>
                        <div className='item-tittle'>
                            Dịch vụ
                        </div>
                        <div className='LeftAuto'>
                            Wifi, Điện nước
                        </div>
                    </div>
                </div>
                <div className='PackageInfoLeft' >
                    <div className='PackageInfoLeftInner' >
                        <div className='item-tittle'>
                            Thời gian
                        </div>
                        <div className='LeftAuto'>
                            20/11 - 23/11
                        </div>
                    </div>
                </div>
                <div className='BorderBottom'></div>
                <div className='Bold20'>
                    <SafetyCertificateOutlined />Secure Payment
                </div>
            </div>
        </div >
    )
}


