import { Route, Routes } from "react-router-dom";
import Main from "./pages/main";

export default function Room() {
  return <Route path="/TTB" element={<Main />} />;
}
