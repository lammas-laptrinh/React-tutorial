import '../../../css/Rooms.css'
import { Input } from 'antd';
import {UnorderedListOutlined ,OrderedListOutlined} from '@ant-design/icons'

import { useContext } from 'react';
import { AppContext } from './AppContext';
const Rooms = () => {

    const { Search } = Input;
    const {iday ,setiday}:any = useContext(AppContext)


    const toggleTheme = () =>{
        setiday(!iday)
      }


    return (
        <div className='Rooms'>
            <div className='Rooms-flex'>
                <div className='Rooms-title'>
                    <p>DashBoard</p>
                </div>
                <div className='Rooms-search'>
                    <Search placeholder="input search text" style={{ width: 200 }} />
                </div>
            </div>
            <div className='Rooms-right'>
                     <p style={{padding:"10px"}}>View:  </p>
                     <div onClick={toggleTheme} className='Rooms-right-flex'>
                     <OrderedListOutlined />
                     <p> Grid </p> 
                     </div>
                     <div onClick={toggleTheme} className='Rooms-right-flex'>
                        <UnorderedListOutlined />
                         <p> Line </p> 
                     </div>
            </div>
        </div>
    )
}

export default Rooms