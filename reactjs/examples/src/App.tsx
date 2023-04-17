import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";

import Headers from "./DashBoard/Headers";
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
// import "./App.css";
import React from "react";
import { SideBarItemProps } from "./components/SideBar/types";
//Boostrap
import Menu from "./components/Menu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
//toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import icons
import { PieChartOutlined, UserAddOutlined, FileTextOutlined } from '@ant-design/icons'
//import layout
import './index.css';
import { Layout, Space } from 'antd';
import DashBoard from "./DashBoard/DashBoard";
import Navbar from "./components/Header/Navbar";
import Playment from "./components/From/Playment";


const dummyData = [
  { id: 0, name: "Test1", icon: <PieChartOutlined /> },
  { id: 1, name: "Test2", icon: <UserAddOutlined /> },
  { id: 2, name: "Test3", icon: <FileTextOutlined /> },

];
function App() {

  const [items, setItems] = React.useState<any>([]);
  useEffect(() => {
    // read file or call APIs

    setItems(dummyData);
  }, []);

  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#EEEEEE',
  };

  const contentStyle: React.CSSProperties = {
    // textAlign: 'center',
    minHeight: 120,
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#EEEEEE',
  };

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    // lineHeight: '10',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
  return (
    <>
      {/* <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Sider style={siderStyle}><SideBar items={items} /></Sider>
          <Layout>
            <Header style={headerStyle}><Navbar/></Header>
            <Content style={contentStyle}><Headers/></Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Space> */}
    <Playment/>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )

}

export default App;
