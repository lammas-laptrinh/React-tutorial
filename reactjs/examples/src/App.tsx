import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import "./App.css";
import React from "react";
import { SideBarItemProps } from "./components/SideBar/types";
import { UserProvider } from "./components/ContextAPI/UserContext";
import { UserStatusIndicator } from "./components/ContextAPI/UserStatusIndicator";
import {LoginButton} from "./components/ContextAPI/LoginButton";
import {LogoutButton} from "./components/ContextAPI/LogoutButton";
import DashBoard from "./components/DashBoard";
import Room from "./components/Room";

function App() {
 
  return (
    <UserProvider>
      <UserStatusIndicator />
      <LoginButton />
      <LogoutButton />
    </UserProvider>
  );
}

export default App;
