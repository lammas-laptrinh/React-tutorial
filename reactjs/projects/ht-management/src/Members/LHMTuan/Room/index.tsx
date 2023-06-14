import { Space } from "antd";
import AppHeader from "../Components/AppHeader";
import AppSidebar from "../Components/AppSidebar";
import PageContent from "../Components/PageContent";
import "./room.css";
//import { rooms } from "./common/types";

function roomManager() {
  return (
    <div className="roomManager">
      <AppHeader />
      <Space>
        <AppSidebar />
        <PageContent rooms={[]} />
      </Space>
    </div>
  );
}

export default roomManager;
