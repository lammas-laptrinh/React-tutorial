import { Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Services from "./Services";
import RoomManage from "./RoomManage";
import Payment from "./Payment";
import SignUp from "./SignUp";
import Invoice from "./Invoice";
import Dashboard from "./Dashboard";
import RoomDetail from "./RoomDetail";

export default function MDKRouter(rootName: string) {
  return (
    <>
      <Route path={`/${rootName}`} element={<LandingPage />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="services" element={<Services />} />
      <Route path="payment" element={<Payment />} />
      <Route path="invoice" element={<Invoice />} />
      <Route path="room" element={<RoomManage />} />
      <Route path="room-detail/:typeroom" element={<RoomDetail />} />
    </>
  );
}
