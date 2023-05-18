import { Routes, Route } from "react-router-dom";
import RoomPage from "../Room";
import RoomDetail from "../Room/RoomDetail";

export default function RouteRoom() {
  return (
    <Routes>
      <Route path="/room-management" element={<RoomPage />} />
      <Route path="/room-management/:id" element={<RoomDetail />} />
    </Routes>
  );
}
