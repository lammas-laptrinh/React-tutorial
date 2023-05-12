import { Routes, Route, BrowserRouter } from "react-router-dom";
import Room from "../Room";
import RoomDetail from "../Room/RoomDetail";

export default function RouteRoom() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room-management" element={<Room />} />
        <Route path="/room-detail" element={<RoomDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
