import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
import RoomPage from "../Members/LHMTuan/Room";
import RoomDetail from "../Members/LHMTuan/Room/RoomDetail";
import ServicePage from "../Members/LHMT/Service";
import KingDetail from "@src/Members/MDK/RoomDetail/KingDetail";
import StandardDetail from "@src/Members/MDK/RoomDetail/StandardDetail";
import DoubleDetail from "@src/Members/MDK/RoomDetail/DoubleDetail";
import Dashboard from "@src/Members/MDK/Dashboard";
import Signin from "@src/Pages/Signin";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Signin />} />
        <Route path="/room-management" element={<RoomPage />} />
        <Route path="/room-management/:id" element={<RoomDetail />} />
        <Route path="/service" element={<ServicePage />} />
        {/* <Route path="/" element={<Signin />} />
        <Route path="/dash-board" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/standard-detail" element={<StandardDetail />} />
        <Route path="/double-detail" element={<DoubleDetail />} />
        <Route path="/king-detail" element={<KingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
