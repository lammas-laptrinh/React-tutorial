
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import '../../css/HeaderMain.css'
import { BellOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import avatar from './Rectangle 2725.png'
import { SibarMain } from "../SideBar/SibarMain";
import { Outlet } from "react-router-dom";
import { Layout, Space } from 'antd';
const HeaderMain = () => {
  const headersDescc = {
    icon: <ExclamationCircleOutlined />,
    icon1: <BellOutlined />,
    name: 'Phạm Yến Thành',
    avatar: avatar,
  };
  const { Header,Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
   
    backgroundColor: '#f9fbfc',
  };

  const contentStyle: React.CSSProperties = {
  
    backgroundColor: '#f9fbfc',
  };

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    background: 'white',
  };

 


  return (

    <>
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>

        <Layout>
          <Header style={headerStyle}> <div className="HeaderMain">
            <div className="HeaderMain-HeaderLeft">
              <HeaderLeft />
            </div>
            <div className="HeaderMain-HeaderRight">
              <HeaderRight headersDescc={headersDescc} />
            </div>

          </div>

          </Header>
          <Layout>
            <Sider style={siderStyle}>  <SibarMain /></Sider>
            <Content style={contentStyle}>
              <Outlet /></Content>
          </Layout>
    
        </Layout>

      </Space>


    </>





  )

}

export default HeaderMain