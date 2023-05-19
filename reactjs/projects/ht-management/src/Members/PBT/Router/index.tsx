import { Routes, Route, BrowserRouter } from "react-router-dom";
import AppTodo from "@members/PBT/Components/Todo/AppTodo";
import RoomMain from "../Components/RoomMain/RoomMain";
import ItemDetail from "../Components/DefaultLayout/ItemDetail/ItemDetail";
export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoomMain />} />
        <Route path="/item/:code" Component={ItemDetail} />
        <Route path="/todo" element={<AppTodo />} />
      </Routes>
    </BrowserRouter>
  );
}
