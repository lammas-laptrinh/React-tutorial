import { Routes, Route, BrowserRouter } from "react-router-dom";
import Room from "../Room";
import RoomDetail from "../Room/RoomDetail";
import Landing from "../ss10/Landing";
import SignUpPage from "../SignUpPage";
import Invoice from "../invoice/index";
import Payment from "../../LHMTuan";
import Service from "@src/Members/LHMT/Service";
import Dashboard from "@src/Pages/Dashboard";
import LoginForm from "../Login/Login";
import Map from "../Task7";
import NotFound from "@src/Pages/Error/NotFound";

export default function RouteRoom() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Routers />} />*/}
        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/room-management" element={<Room />} />
        <Route path="/room-management/:id" element={<Service />} />
        <Route path="/Landing/:id" element={<RoomDetail />} />
        <Route path="/Login" element={<LoginForm />} />
        <Route
          path="/Signup"
          element={
            <SignUpPage
              onSignUp={function (
                _fullName: string,
                _userName: string,
                _email: string,
                _password: string,
                _referralCode: string
              ): void {
                throw new Error("Function not implemented.");
              }}
              onFacebookSignUp={function (): void {
                throw new Error("Function not implemented.");
              }}
              onGoogleSignUp={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route path="/Landing/:id/payment/" element={<Payment />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/map" element={<Map />} />
        {/*<Route path="" element={<Dashboard />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/standard-detail" element={<StandardDetail />} />
      <Route path="/double-detail" element={<DoubleDetail />} />
      <Route path="/king-detail" element={<KingDetail />} />*/}
      </Routes>
    </BrowserRouter>
  );
}
