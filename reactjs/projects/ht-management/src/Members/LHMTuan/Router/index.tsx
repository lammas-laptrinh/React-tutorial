import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoomPageTuan from "../Room";
import RoomDetailTuan from "../Room/RoomDetail";
import Landing from "../ss10/Landing";
import SignUpPage from "../SignUpPage";
import Invoice from "../invoice/index";

export default function RouteRoom() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room-Tuan" element={<RoomPageTuan />} />
        <Route path="/room-Tuan/:id" element={<RoomDetailTuan />} />
        <Route path="/Landing-Tuan" element={<Landing />} />
        <Route
          path="/SignUpPage"
          element={
            <SignUpPage
              onSignUp={function (
                _fullName: string,
                _userName: string,
                _email: string,
                _password: string
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
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}
