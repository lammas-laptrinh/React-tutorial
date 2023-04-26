//import { Input, Space } from "antd";
//import Grid from "../Room/Grid";
import RoomSearch from "../Room/Search";
//import ViewCard from "../Room/ViewCard";
//import RoomFilter from "../Room/RoomFilter";
import { rooms, d, k } from "../Room/types";

function PageContent() {
  return (
    <div className="PageContent">
      <div className="DashBoard" style={{ position: "absolute", top: "-10px" }}>
        <div className="DashBoard-title">
          <h1>Room</h1>
          <div
            className="DashBoard-timkiem"
            style={{ position: "absolute", left: "160px", top: "25px" }}
          ></div>
          <>
            <RoomSearch rooms={rooms} d={d} k={k} />
          </>
        </div>
      </div>
    </div>
  );
}

export default PageContent;
