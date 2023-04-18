import React from "react";
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import SideBar from "./components/SideBar";
//import ClassComponents from "./views/LifeCycle/ClassComponents";
//import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import "./session_2.css";
//import { SideBarItemProps } from "./components/SideBar/types";
import { Space } from "antd";
import AppHeader from "./components/Session_2/AppHeader";
import AppSidebar from "./components/Session_2/AppSidebar";
import PageContent from "./components/Session_2/PageContent";
import Footer from "./components/Session_2/Footer";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space>
        <AppSidebar />
        <PageContent />
      </Space>
      <Footer />
    </div>
  );
}

export default App;
