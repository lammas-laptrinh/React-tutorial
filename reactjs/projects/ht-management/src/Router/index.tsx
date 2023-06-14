import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
import Layout from "./Layout";
import { MEMBERS } from "@src/helpers/Members";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        {MEMBERS.map((member) => {
          return (
            <Route
              key={member.id}
              path={`/${member.name}`}
              element={<Layout />}
            >
              {member.pages(member.name)}
            </Route>
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
