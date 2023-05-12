import { Routes, Route, BrowserRouter } from "react-router-dom";
import Signin from "../Pages/Signin";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/Error/NotFound";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Signin />} />
        <Route path="/dash-board" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
