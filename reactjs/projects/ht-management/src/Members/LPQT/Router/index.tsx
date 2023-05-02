import { Routes, Route, BrowserRouter } from "react-router-dom";
import ServicePage from "../Service/pages";
import MainLayout from "../Layout/mainLayout/MainLayout";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout children={<ServicePage />} />} />
      </Routes>
    </BrowserRouter>
  );
}
