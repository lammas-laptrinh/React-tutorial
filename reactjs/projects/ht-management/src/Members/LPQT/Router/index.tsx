import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import RoomMain from "../Rooms/pages";
import RoomDetail from "../Rooms/pages/Detail";
import ServicePage from "../Service/pages";
import MainLayout from "../Layout/mainLayout/MainLayout";
import Landing from '../Landing/index'
import RegisterPage from "../Register/page";
import NotFound from "@src/Pages/Error/NotFound";
import PaymentPage from '../../LPQT/Payment/page/index'
import InvoiceForm from "../Invoice/page";
import PrivateRoute from "../PrivateRoute";
import InvoiceFaileForm from "../Invoice/page/failePage";
import DashboardPage from "../Dashboard/pages";
import SignInPage from "../SignIn/page";
import MyAccount from "../User/page";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/homepage" />} />
        <Route path='/homepage' element={<Landing />} />
        <Route path="*" element={<MainLayout children={<NotFound />} />} />
        <Route path='/room' element={<MainLayout children={<RoomMain />} />} />
        <Route path='/room/:roomId' element={<RoomDetail />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/successpaid" element={<InvoiceForm />} />
        <Route path="/failepaid" element={<InvoiceFaileForm />} />
        <Route path="/account/:userId" element={<MyAccount />} />
        <Route path="/service" element={
          <PrivateRoute>
            <MainLayout children={<ServicePage />} />
          </PrivateRoute>
        } />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <MainLayout children={<DashboardPage />} />
          </PrivateRoute>}
        />
        <Route path="/payment/:roomId" element={
          <PrivateRoute>
            <PaymentPage />
          </PrivateRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}
