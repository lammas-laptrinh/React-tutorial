
import HeaderMain from "@assets/phamyenthanh/VJP_Session4_PhamYenThanh/components/Headers/HeaderMain";
import { Route,Routes } from "react-router-dom";
import RoomsMain from "./Content/Rooms/RoomsMain";
import DashboardMain from "./Content/DashBoard/DashboardMain";
function Layouts() {



  return (
    <>
    <Routes>
               
                <Route path='/' element={<HeaderMain />}>
                    <Route path='DashboardMain' element={<DashboardMain />} />
                    <Route path='RoomsMain' element={<RoomsMain />} />
                </Route>
            </Routes>
     

    </>
  )



}

export default Layouts;
