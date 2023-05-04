
import HeaderMain from "@assets/phamyenthanh/VJP_Session4_PhamYenThanh/components/Headers/HeaderMain";
import { Route, Routes } from "react-router-dom";
import RoomsMain from "./Content/Rooms/RoomsMain";
import DashboardMain from "./Content/DashBoard/DashboardMain";
import RequestMain from "./Content/Request/RequestMain";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Layouts() {



  return (
    <>
      <Routes>

        <Route path='/' element={<HeaderMain />}>
          <Route path='DashboardMain' element={<DashboardMain />} />
          <Route path='RoomsMain' element={<RoomsMain />} />
          <Route path='RequestMain' element={<RequestMain />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  )



}

export default Layouts;
