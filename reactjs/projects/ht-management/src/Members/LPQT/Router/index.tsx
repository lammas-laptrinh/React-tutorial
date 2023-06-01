import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoomMain from "../Rooms/pages";
import RoomDetail from "../Rooms/pages/Detail";
import ServicePage from "../Service/pages";
import MainLayout from "../Layout/mainLayout/MainLayout";
import Landing from '../Landing/index'
import RegisterPage from "../Register/page";
import NotFound from "@src/Pages/Error/NotFound";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<MainLayout children={<NotFound />} />} />
        <Route path="/service" element={<MainLayout children={<ServicePage />} />} />
        <Route path='/room' element={<MainLayout children={<RoomMain />} />} />
        <Route path='/room/:roomId' element={<RoomDetail />} />
        <Route path='/landing' element={<Landing />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
