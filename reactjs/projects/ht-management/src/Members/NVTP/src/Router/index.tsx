import { Routes, Route } from "react-router-dom";
import Room from "../Pages/Room";
import RoomDetail from "../Pages/Room/RoomDetail";
import Detail from "../Pages/Room/Detail";
import Landing from "../Pages/Landing";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Invoice from "../Pages/Invoice";
import SignupForm from "../Pages/Signup/Signup";
import Booking from "../Pages/Booking";
import PaymentDetail from "../Pages/PaymentDetail";
import DashBoard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Map from "../Pages/GoogleMap/Map";
export default function NVTPRouter(rootName: string) {
  return (
    <>
      <Route index path={`/${rootName}`} element={<Landing />} />
      <Route path="service" element={<Service />} />
      <Route path="room" element={<Room />} />
      <Route path=":id" Component={RoomDetail} />
      <Route path="room/:id" Component={Detail} />
      <Route path="about" element={<About />} />
      <Route path="invoice" element={<Invoice />} />
      <Route path="sign" element={<SignupForm />} />
      <Route path="login" element={<Login />} />
      <Route path="book" element={<Booking />} />
      <Route path="pay" element={<PaymentDetail />} />
      <Route path="dash" element={<DashBoard />} />
      <Route path="map" element={<Map />} />
    </>
  );
}
