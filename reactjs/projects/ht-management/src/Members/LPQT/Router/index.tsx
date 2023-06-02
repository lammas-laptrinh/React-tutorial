import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoomMain from "../Rooms/pages";
import RoomDetail from "../Rooms/pages/Detail";
import ServicePage from "../Service/pages";
import MainLayout from "../Layout/mainLayout/MainLayout";
import Landing from '../Landing/index'
import RegisterPage from "../Register/page";
import NotFound from "@src/Pages/Error/NotFound";
import PaymentPage from '../../LPQT/Payment/page/index'
import { Navigate } from "react-router-dom";
import InvoiceForm from "../Invoice";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/homepage" />} />
        <Route path='/homepage' element={<Landing />} />
        <Route path="*" element={<MainLayout children={<NotFound />} />} />
        <Route path="/service" element={<MainLayout children={<ServicePage />} />} />
        <Route path='/room' element={<MainLayout children={<RoomMain />} />} />
        <Route path='/room/:roomId' element={<RoomDetail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/succespaid" element={<InvoiceForm />} />
      </Routes>
    </BrowserRouter>
  );
}
