import React from 'react'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
function DashBoard() {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <div className='DashBoard'>
      <div className='DashBoard-title'>
        <h1>DashBoard</h1>

      </div>
      <div className='DashBoard-timkiem'>
        <Space direction="vertical">
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        </Space>
      </div>
    </div>
  )
}

export default DashBoard