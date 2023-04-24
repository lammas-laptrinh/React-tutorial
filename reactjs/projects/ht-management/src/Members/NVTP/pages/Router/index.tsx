import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signin from "../Pages/Signin";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/Error/NotFound";
import Room from "../Pages/Room/index";
import RoomDetail from "../Pages/Room/RoomDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Room />} />
        <Route path="/rooms/:id" Component={RoomDetail} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dash-board" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}