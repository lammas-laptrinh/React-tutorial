import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import "./App.css";
import PaymentDetail from "./components/PaymentDetail/PaymentDetail";

function App() {
  return <PaymentDetail />;
}

export default App;
