import React from "react";
import { SideBarItemProps, SideBarProps } from "./types";
import SideBarItem from "./SideBarItem";
import SideBarTitle from "./SideBarTitle";

export default function SideBar(props: SideBarProps) {
  return (
    <div className="side-bar-container">
      <div className="side-bar-title">
        <SideBarTitle text="DTD" />
      </div>
      <div className="side-bar-items">
        {props.items.map((item: SideBarItemProps) => {
          return <SideBarItem {...item} />;
        })}
      </div>
    </div>
  );
}
