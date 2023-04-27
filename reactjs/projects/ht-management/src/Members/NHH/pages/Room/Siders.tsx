import { TeamOutlined , FileTextOutlined, PieChartOutlined  } from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import "./index.scss";
export default function index() {
    const { Sider } = Layout;
    return <div>
         <Sider trigger={null} >     
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: 'DTD',
            },
            {
              key: '2',
              icon: <PieChartOutlined /> ,
            },
            {
              key: '3',
              icon: <TeamOutlined />
            },
            {
                key: '4',
                icon: <FileTextOutlined />
              },
          ]}
        />
      </Sider>
    </div>;
  }
  