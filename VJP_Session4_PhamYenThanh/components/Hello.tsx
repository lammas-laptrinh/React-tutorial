import './App.css';
import { AppProvider } from '../Context/AppContext';
import Rooms from './Rooms';
import Headers from './Headers';
import RoomsTop from './RoomsTop';
import { Layout, Space } from 'antd';
import Siders from './Siders';
function Hello() {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
   backgroundColor:"white",
  
  };
  
  const contentStyle: React.CSSProperties = {
   
  
  };
  
  const siderStyle: React.CSSProperties = {
    backgroundColor:"white",
 
  };
  
  const footerStyle: React.CSSProperties = {
   

  };
  return (
    <div
      className='App'>
    
      <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Sider style={siderStyle}><Siders/></Sider>
      <Layout>
        <Header style={headerStyle}> <Headers/></Header>
        <Content style={contentStyle}><AppProvider>
          <RoomsTop />  
          <Rooms />
      </AppProvider></Content>
       
      </Layout>
    </Layout>
  </Space>
    </div>
  );
}

export default Hello;