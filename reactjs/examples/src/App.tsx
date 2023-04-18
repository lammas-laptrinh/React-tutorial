import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SideBar from "./components/SideBar";
import Session_1 from "./components/session_1"
import ClassComponents from "./views/LifeCycle/ClassComponents";
import FunctionComponents from "./views/LifeCycle/FunctionComponents";
import { PaymentDetailItemProps } from "./components/session_1/type";

import DashBoard from "./components/DashBoard/DashBoard";


//btvn 1
// function App() {
//   const [items, setItems] = useState<PaymentDetailItemProps>({
//     email: 'Phamthai180@gmail.com',
//     card_number: '31023120323',
//     expiry_date: '12/24',
//     CVV: '123',
//     subtotal: 96,
//     platfrom:4,
//     total:0
//   });
//   useEffect(() => {
//     setItems(prevItems => ({
//       ...prevItems,
//       total: prevItems.subtotal + prevItems.platfrom,
//     }));
//   }, [items.subtotal, items.platfrom]);
  

//   return <Session_1  subtotal={items.subtotal} platfrom={items.platfrom} total={items.total} email={items.email} card_number={items.card_number} expiry_date={items.expiry_date} CVV={items.CVV} />;
// }

//Btvn 2
function App() {

  return <DashBoard/>
}
export default App;
