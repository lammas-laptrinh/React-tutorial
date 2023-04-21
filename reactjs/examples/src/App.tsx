import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import "./App.css";
import { CounterProvider } from "@src/Session_3/CounterContext";
import Counter from "@src/Session_3/Counter";

function App() {
  return (
    <CounterProvider>
      <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
    </CounterProvider>
  );
}

export default App;
