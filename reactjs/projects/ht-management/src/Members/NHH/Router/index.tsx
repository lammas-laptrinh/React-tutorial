import { Routes, Route, BrowserRouter } from "react-router-dom";
import CheckOut from "../CheckOut/CheckOut"


export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}
