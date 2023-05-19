import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
<<<<<<< HEAD
=======
import KingDetail from "@src/Members/MDK/RoomDetail/KingDetail";
import StandardDetail from "@src/Members/MDK/RoomDetail/StandardDetail";
import DoubleDetail from "@src/Members/MDK/RoomDetail/DoubleDetail";
import Dashboard from "@src/Members/MDK/Dashboard";

>>>>>>> 158e7e9013b5797c0e7556c0696a3dc474fe046c
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
<<<<<<< HEAD
        <Route path="/" element={<Signin />} />
=======
        {/* <Route path="/" element={<Signin />} />
>>>>>>> 158e7e9013b5797c0e7556c0696a3dc474fe046c
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
