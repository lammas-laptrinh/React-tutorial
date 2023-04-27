import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/mainLayout/MainLayout";
import RoomMain from "../Rooms/pages";
import RoomDetail from "../Rooms/pages/Detail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/room' element={<MainLayout children={<RoomMain />} />} />
        <Route path='/room/:roomId' element={<MainLayout children={<RoomDetail />} />} />
      </Routes>
    </BrowserRouter >
  );
}
