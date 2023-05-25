import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
import Room from "../Members/LHMTuan/Room";
import RoomDetail from "../Members/LHMTuan/Room/RoomDetail";
import KingDetail from "@src/Members/MDK/RoomDetail/KingDetail";
import StandardDetail from "@src/Members/MDK/RoomDetail/StandardDetail";
import DoubleDetail from "@src/Members/MDK/RoomDetail/DoubleDetail";
import Dashboard from "@src/Members/MDK/Dashboard";
import Routers from "./Members/NHH/Router";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routers />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/room-management" element={<Room />} />
        <Route path="/room-detail" element={<RoomDetail />} />
        <Route path="" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/standard-detail" element={<StandardDetail />} />
        <Route path="/double-detail" element={<DoubleDetail />} />
        <Route path="/king-detail" element={<KingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
