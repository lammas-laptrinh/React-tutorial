import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import ServicePage from "../Service/pages";
import MainLayout from "../Layout/mainLayout/MainLayout";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/service'} />} />
        <Route path="/service" element={<MainLayout children={<ServicePage />} />} />
      </Routes>
    </BrowserRouter>
  );
}
