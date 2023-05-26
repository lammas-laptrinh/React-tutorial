import { Space } from "antd";

import "./index.css";
import AppHeader from "../Components/AppHeader";
import AppSidebar from "../Components/AppSideBar";
import PageContent from "../Components/PageContent";

function roomService() {
  return (
    <div className="roomService">
      <AppHeader />
      <Space>
        <AppSidebar />
        <PageContent />
      </Space>
    </div>
  );
}

export default roomService;
