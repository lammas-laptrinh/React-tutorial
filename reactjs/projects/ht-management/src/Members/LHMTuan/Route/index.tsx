import { Routes, Route } from "react-router-dom";
import RoomPageTuan from "../Room";
import RoomDetailTuan from "../Room/RoomDetail";

export default function RouteRoom() {
  return (
    <Routes>
      <Route path="/room-Tuan" element={<RoomPageTuan />} />
      <Route path="/room-Tuan/:id" element={<RoomDetailTuan />} />
    </Routes>
  );
}
