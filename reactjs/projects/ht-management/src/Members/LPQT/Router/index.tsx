import { Navigate, Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout/MainLayout";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="trang-chu" />} />
        <Route path="*" element={<MainLayout />} /> 
      </Routes>
    </BrowserRouter>
  );
}
