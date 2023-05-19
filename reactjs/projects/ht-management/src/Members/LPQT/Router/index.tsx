import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import RoomMain from "../Rooms/pages";
import RoomDetail from "../Rooms/pages/Detail";
import ServicePage from "../Service/pages";
import MainLayout from "../Layout/mainLayout/MainLayout";
import PaymentPage from "../Payment/page";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/service" element={<MainLayout children={<ServicePage />} />} />
        <Route path='/room' element={<MainLayout children={<RoomMain />} />} />
        <Route path='/room/:roomId' element={<RoomDetail />} />
        <Route path="/" element={<Navigate to={'/payment'} />} />
        <Route path="/payment/*" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}
