import { Routes, Route } from "react-router-dom";

import Homepage from "../HomePage/HomePage";
import Home from "../pages/Home";
import Detail from "../pages/RoomDetail/roomDetail";
import Main from "../pages/main";
import CheckOut from "../CheckOut/CheckOut";
import Login from "../Login/Login";


export default function Routers() {
  return (  
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Room" element={<Main />} />
      <Route path="/Service" element={<Home />} />
      <Route path="/DetailRoom" element={<Detail />} />
      <Route path="/CheckOut" element={<CheckOut />} />
      <Route path="/Login" element={<Login />} />
      </Routes>
    
  );
}
