import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/RoomDetail/roomDetail";
import Main from "../pages/main";
import CheckOut from "../CheckOut/CheckOut";
import Login from "../pages/Login/Login";
import HomePage from "../HomePage/HomePage";
import SuccessCheckout from "../pages/SuccessCheckout/SuccessCheckout";

export default function NHHRouters(rootName: string) {
  return (
    <>
      <Route path={`/${rootName}`} element={<HomePage />} />
      <Route path="Room" element={<Main />} />
      <Route path="Service" element={<Home />} />
      <Route path="DetailRoom" element={<Detail />} />
      <Route path="CheckOut" element={<CheckOut />} />
      <Route path="Login" element={<Login />} />
      <Route path="SuccessCheckout" element={<SuccessCheckout />} />
    </>
  );
}
