import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import "./App.css";

import NewUser from './components/NewUser'
import UsersList from './components/UsersList'
import { UserProvider } from './context/UserContext'


function App() {
  return
   <UserProvider>
  <h1>App is working</h1>
  <UsersList />
  <NewUser />
</UserProvider>;
}

export default App;
