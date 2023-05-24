import { Routes, Route, BrowserRouter } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/Error/NotFound";
import RoomService from "../Members/PBT/Components/DefaultLayout/RoomMain";
import HomeUser from "../Members/PBT/Components/DefaultLayout/HomeUser";
import DetailRoom from "../Members/PBT/Components/DefaultLayout/HomeUser/DetailRoom";
import Payment from "../Members/PBT/Components/DefaultLayout/HomeUser/Payment/MainPayment";
import PaymentSuccess from "../Members/PBT/Components/DefaultLayout/HomeUser/PaymentSuccess";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<RoomService/>} />
        <Route path="/" element={<HomeUser/>} />
        <Route path="/payment-success" element={<PaymentSuccess/>} />
        <Route path="/room-detail/:typeroom" element={<DetailRoom/>} />
        <Route path="/room-detail/:typeroom/payment" element={<Payment roomtype="Double Room"  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique dolorum rem reiciendis sit dicta eum, dignissimos, beatae illo commodi placeat adipisci"
         date="12/06/2023- 12/08/2023" service="Wifi, Gym, food" subtotal={100} discount={0} total={100}/> } />
        <Route path="/detail" element={<DetailRoom/>} />
        <Route path="/dash-board" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
