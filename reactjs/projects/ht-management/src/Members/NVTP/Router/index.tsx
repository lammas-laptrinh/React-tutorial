import { Routes, Route, BrowserRouter } from "react-router-dom";
import Room from "../pages/Room";
import RoomDetail from "../pages/Room/RoomDetail";
import Landing from "../pages/Landing";
import About from "../pages/About";
import Service from "../pages/Service";
import Invoice from "../pages/Invoice";
import SignupForm from "../pages/Signup/Signup";
import Booking from "../pages/Booking";
import PaymentDetail from "../pages/PaymentDetail";
import DashBoard from "../pages/Dashboard";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/service" element={<Service />} />
        <Route path="/room" element={<Room />} />
        <Route path="/:id" Component={RoomDetail} />
        <Route path="/about" element={<About />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/sign" element={<SignupForm />} />
        <Route path="/book" element={<Booking />} />
        <Route path="/pay" element={<PaymentDetail />} />
        <Route path="/dash" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
