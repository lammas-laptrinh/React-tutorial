import { Routes, Route, BrowserRouter } from "react-router-dom";
import Service from "../Service";

export default function RouteService() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
  );
}
