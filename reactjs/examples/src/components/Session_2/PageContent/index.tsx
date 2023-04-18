import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

function PageContent() {
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  return (
    <div className="PageContent">
      <div className="DashBoard" style={{ position: "absolute", top: "-10px" }}>
        <div className="DashBoard-title">
          <h1>DashBoard</h1>
          <div
            className="DashBoard-timkiem"
            style={{ position: "absolute", left: "160px", top: "25px" }}
          >
            <Space direction="vertical">
              <Search
                placeholder="Search....."
                onSearch={onSearch}
                style={{ width: 200 }}
              />
            </Space>
          </div>
        </div>

        <div className="Revenue">
          <div>
            <div className="Revenueleft">
              <div className="Revenueleft-title1">
                <p>Doanh thu ngày</p>
              </div>
            </div>
          </div>
          <div>
            <div className="Revenueright">
              <div className="Revenueright-title">
                <p>Tổng quan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
