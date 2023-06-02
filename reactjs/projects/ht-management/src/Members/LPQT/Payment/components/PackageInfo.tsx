
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


