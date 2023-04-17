import React from 'react'
import {ExclamationCircleOutlined,BellOutlined} from '@ant-design/icons'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-tile'>
        <span>Version 1.0.0</span>
        </div>
        <div className='navbar-icon'>
            <ul >
                <li><BellOutlined /></li>
                <li><ExclamationCircleOutlined /></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar