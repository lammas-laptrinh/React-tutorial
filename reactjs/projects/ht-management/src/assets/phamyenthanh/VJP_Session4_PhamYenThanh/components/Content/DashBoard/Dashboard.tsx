
import '../../../css/Dashboard.css'
import { Input } from 'antd';
const Dashboard = () => {
    const { Search } = Input;
    return (
        <>
            <div className='Dashboard'>
                <div className='Dashboard-title'>
                    <p>DashBoard</p>
                </div>
                <div className='Dashboard-search'>
                    <Search placeholder="input search text" style={{ width: 200 }} />
                </div>

            </div>
            <div className='Dashboard-backgrop' >
                <div className='Dashboard-backgrop-left'>
                        <div className='Dashboard-backgrop-title'>
                                <p>Doanh thu ngày</p>
                        </div>
                </div>
                <div className='Dashboard-backgrop-right'>
                         <div className='Dashboard-backgrop-title'>
                                <p>Tổng quan</p>
                        </div>
                </div>
            </div>
        </>
    )
}


export default Dashboard