import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import PaymentPage from "../Payment/page";
import MainLayout from "../Layout/mainLayout/MainLayout";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/payment'} />} />
        <Route path="/payment/*" element={<MainLayout children={<PaymentPage />} />} />
      </Routes>
    </BrowserRouter>
  );
}
